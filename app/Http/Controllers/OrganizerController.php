<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrganizerChangeEmailRequest;
use App\Http\Requests\OrganizerResendEmailRequest;
use App\Jobs\SendMail;
use App\Mail\TargetDrawn;
use App\Models\Draw;
use App\Models\Mail as MailModel;
use App\Models\Participant;
use Csv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Metrics;

class OrganizerController extends Controller
{
    public function view(Draw $draw)
    {
        return view('organizer', [
            'draw' => $draw->hash,
        ]);
    }

    public function fetch(Draw $draw)
    {
        return response()->json([
            'draw' => $draw->hash,
            'expires_at' => $draw->expires_at,
            'participants' => $draw->participants->mapWithKeys(function ($participant) {
                return [$participant->id => $participant->only([
                    'id', 'name', 'email', 'mail',
                ])];
            }),
            'changeEmailUrls' => $draw->participants->mapWithKeys(function ($participant) {
                return [
                    $participant->id => URL::signedRoute('organizerPanel.changeEmail', [
                        'draw' => $participant->draw, 'participant' => $participant
                    ])
                ];
            }),
            'finalCsvAvailable' => $draw->next_solvable
        ]);
    }

    public function fetchState(Draw $draw)
    {
        return response()->json([
            'participants' => $draw->participants->mapWithKeys(function ($participant) {
                return [$participant->id => $participant->only(['id', 'mail'])];
            }),
        ]);
    }

    public function changeEmail(OrganizerChangeEmailRequest $request, Draw $draw, Participant $participant)
    {
        if ($participant->email === $request->input('email')) {
            $message = trans('message.sent');
        } else {
            $participant->email = $request->input('email');
            $participant->save();

            $message = trans('organizer.up_and_sent');
        }

        $participant->mail->updateDeliveryStatus(MailModel::CREATED);

        $this->sendEmail($participant);

        return $request->ajax() ?
            response()->json([
                'message' => $message, 'participant' => $participant->only(['id', 'mail']),
            ]) :
            redirect('/')->with('message', $message);
    }

    protected function sendEmail(Participant $participant)
    {
        Metrics::increment('email');

        SendMail::dispatch($participant, new TargetDrawn($participant));
    }

    public function csvInit(Draw $draw)
    {
        return response(
            "\xEF\xBB\xBF".// UTF-8 BOM
            $draw->participants
                ->toCsv(['name', 'email', 'exclusionsNames'])
                ->prepend([
                    ['# Fichier généré le '.date('d-m-Y').' sur '.config('app.name').' ('.config('app.url').')'],
                    ['# Ce fichier peut être utilisé pour préremplir les participants ainsi que les exclusions associées'],
                ])
        );
    }

    public function csvFinal(Draw $draw)
    {
        abort_unless($draw->expired, 403, 'Cet évènement n\'est pas encore terminé');
        abort_unless($draw->next_solvable, 404, 'Cet évènement ne permet pas cette génération');

        return response(
            "\xEF\xBB\xBF".// UTF-8 BOM
            $draw->participants
                ->appendTargetToExclusions()
                ->toCsv(['name', 'email', 'exclusionsNames'])
                ->prepend([
                    ['# Fichier généré le '.date('d-m-Y').' sur '.config('app.name').' ('.config('app.url').')'],
                    ['# Ce fichier peut être utilisé pour préremplir les participants ainsi que les exclusions associées'],
                ])
        );
    }

    public function delete(Request $request, Draw $draw)
    {
        $draw->delete();

        $message = trans('organizer.deleted');

        return $request->ajax() ?
            response()->json([
                'message' => $message,
            ]) :
            redirect('/')->with('message', $message);
    }
}
