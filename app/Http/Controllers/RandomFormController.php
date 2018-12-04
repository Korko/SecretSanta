<?php

namespace App\Http\Controllers;

use App\Draw;
use App\Exceptions\SolverException;
use App\Http\Requests\RandomFormRequest;
use App\Mail\TargetDrawn;
use App\Participant;
use Facades\App\Libs\HatSolver as Solver;
use Facades\App\Libs\SmsTools as SmsTools;
use Hashids;
use Illuminate\Http\Request;
use Mail;
use Metrics;
use Sms;

class RandomFormController extends Controller
{
    public function view()
    {
        return view('randomForm');
    }

    public function handle(RandomFormRequest $request)
    {
        try {
            $this->draw($request);

            $message = trans('message.sent');

            return $request->ajax() ?
                response()->json(['message' => $message]) :
                redirect('/')->with('message', $message);
        } catch (SolverException $e) {
            $error = trans('error.solution');

            return $request->ajax() ?
                response()->json(['error' => $error], 500) :
                redirect('/')->with('error', $error);
        }
    }

    protected function draw(Request $request)
    {
        $participants = $this->getParticipants($request);

        $hat = Solver::one($participants, array_column($participants, 'exclusions'));

        Metrics::increment('draws');
        Metrics::increment('participants', count($participants));

        if ($request->input('contentMail')) {
            $this->sendMails($request, $participants, $hat);
        }

        if ($request->input('contentSMS')) {
            $this->sendSMSs($request, $participants, $hat);
        }
    }

    protected function getParticipants(Request $request)
    {
        $names = $request->input('name');
        $emails = $request->input('email');
        $phones = $request->input('phone');
        $exclusions = $request->input('exclusions', []);

        $participants = [];
        for ($i = 0; $i < count($names); $i++) {
            if ($phones[$i] && substr($phones[$i], 0, 1) === '0') {
                $phones[$i] = substr($phones[$i], 1);
            }
            $participants[$i] = [
                'name'       => $names[$i],
                'email'      => $emails[$i],
                'phone'      => $phones[$i] ? '+33'.$phones[$i] : $phones[$i],
                'exclusions' => (isset($exclusions[$i])) ? array_map('intval', $exclusions[$i]) : [],
            ];
        }

        return $participants;
    }

    protected function sendMails(Request $request, array $participants, array $hat)
    {
        $organizer = $participants[0];

        foreach ($hat as $santaIdx => $targetIdx) {
            $santa = $participants[$santaIdx];
            $target = $participants[$targetIdx];

            if (!empty($santa['email'])) {
                // Santa of that santa
                $superSanta = $participants[array_search($santaIdx, $hat)];

                $dearSantaLink = null;
                if ($request->input('dearsanta')) {
                    $dearSantaLink = $this->getDearSantaLink($superSanta, $request->input('dearsanta-expiration'));
                }

                Metrics::increment('email');
                Mail::to($santa['email'], $santa['name'])
                    ->send(new TargetDrawn(
                        $santa,
                        $target,
                        $request->input('title'),
                        $request->input('contentMail'),
                        $organizer,
                        $dearSantaLink,
                    ));
            }
        }
    }

    protected function sendSMSs(Request $request, array $participants, array $hat)
    {
        foreach ($hat as $santaIdx => $targetIdx) {
            $santa = $participants[$santaIdx];
            $target = $participants[$targetIdx];

            if (!empty($santa['phone'])) {
                Metrics::increment('phone');
                Metrics::increment('sms', SmsTools::count($request->input('contentSMS')));

                $contentSms = str_replace(['{SANTA}', '{TARGET}'], [$santa['name'], $target['name']], $request->input('contentSMS'));
                Sms::message($santa['phone'], $contentSms);
            }
        }
    }

    protected function getDearSantaLink(array $santa, $expirationDate)
    {
        $key = openssl_random_pseudo_bytes(32);
        $participant = $this->addParticipant($santa, $key, $expirationDate);

        return route('dearsanta', ['santa' => Hashids::encode($participant->id)]).'#'.bin2hex($key);
    }

    private function getDraw($expirationDate)
    {
        if (!isset($this->draw)) {
            $this->draw = new Draw();
            $this->draw->expiration = $expirationDate;
            $this->draw->save();
        }

        return $this->draw;
    }

    private function addParticipant(array $santa, $key, $expirationDate)
    {
        $draw = $this->getDraw($expirationDate);

        $participant = new Participant();
        $participant->draw_id = $draw->id;

        $cipher = config('app.cipher');
        $ivLength = openssl_cipher_iv_length($cipher);

        $iv = openssl_random_pseudo_bytes($ivLength);
        $participant->santa = bin2hex($iv).
            openssl_encrypt(serialize($santa), $cipher, $key, 0, $iv);

        $iv = openssl_random_pseudo_bytes($ivLength);
        $participant->challenge = bin2hex($iv).
            openssl_encrypt(Participant::CHALLENGE, $cipher, $key, 0, $iv);

        $participant->save();

        return $participant;
    }
}
