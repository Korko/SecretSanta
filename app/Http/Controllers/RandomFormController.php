<?php

namespace Korko\SecretSanta\Http\Controllers;

use Illuminate\Http\Request;
use Korko\SecretSanta\Draw;
use Korko\SecretSanta\Http\Requests\RandomFormRequest;
use Korko\SecretSanta\Participant;
use Mail;
use Sms;
use Facades\Korko\SecretSanta\Libs\HatSolver as Solver;
use Statsd;

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
            return $request->ajax() ? response()->json(['message' => $message]) : redirect('/')->with('message', $message);
        } catch(SolverException $e) {
            $error = trans('error.solution');
            return $request->ajax() ? response()->json(['error' => $error], 500) : redirect('/')->with('error', $error);
        }
    }

    protected function draw(Request $request)
    {
        $participants = $this->getParticipants($request);

        $hat = Solver::one($participants, array_column($participants, 'exclusions'));

        $this->sendMessages($request, $participants, $hat);
    }

    protected function getParticipants(Request $request)
    {
        $names = $request->input('name');
        $emails = $request->input('email');
        $phones = $request->input('phone');
        $exclusions = $request->input('exclusions', []);

        $participants = [];
        for ($i = 0; $i < count($names); $i++) {
            $participants[$i] = [
                'name'       => $names[$i],
                'email'      => $emails[$i],
                'phone'      => $phones[$i] ? str_pad($phones[$i], 10, '0', STR_PAD_LEFT) : $phones[$i],
                'exclusions' => (isset($exclusions[$i])) ? array_map('intval', $exclusions[$i]) : [],
            ];
        }

        Statsd::increment('draws');
        Statsd::increment('participants', count($participants));

        return $participants;
    }

    protected function sendMessages(Request $request, array $participants, array $hat)
    {
        foreach ($hat as $santaIdx => $targetIdx) {
            $santa = $participants[$santaIdx];
            $target = $participants[$targetIdx];

            $this->sendMessage($request, $santa, $target);
        }
    }

    protected function sendMessage(Request $request, array $santa, array $target)
    {
        $dearSantaLink = null;
        if ($request->input('dearsanta')) {
            $dearSantaLink = $this->getDearSantaLink($santa, $request->input('dearsanta-expiration'));
        }

        if (!empty($santa['email'])) {
            Statsd::increment('email');
            $this->sendMail($santa, $target, $request->input('title'), $request->input('contentMail'), $dearSantaLink);
        }

        if (!empty($santa['phone'])) {
            Statsd::increment('phone');
            $this->sendSms($santa, $target, $request->input('contentSMS'));
        }
    }

    protected function getDearSantaLink(array $santa, $expirationDate)
    {
        $key = openssl_random_pseudo_bytes(32);
        $participant = $this->addParticipant($santa, $key, $expirationDate);

        return route('dearsanta', ['santa' => $participant->id]).'#'.bin2hex($key);
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

        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes256'));
        $participant->santa = bin2hex($iv).openssl_encrypt(serialize($santa), 'aes256', $key, 0, $iv);

        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes256'));
        $participant->challenge = bin2hex($iv).openssl_encrypt(Participant::CHALLENGE, 'aes256', $key, 0, $iv);

        $participant->save();

        return $participant;
    }

    protected function sendMail(array $santa, array $target, $title, $content, $dearSantaLink)
    {
        $contentMail = str_replace(['{SANTA}', '{TARGET}'], [$santa['name'], $target['name']], $content);
        $contentMail .= !empty($dearSantaLink) ?
            PHP_EOL.trans('form.mail.post2', ['link' => $dearSantaLink]) :
            PHP_EOL.trans('form.mail.post');

        Mail::raw($contentMail, function ($m) use ($santa, $title) {
            $m->to($santa['email'], $santa['name'])->subject($title);
        });
    }

    protected function sendSms(array $santa, array $target, $content)
    {
        $contentSms = str_replace(['{SANTA}', '{TARGET}'], [$santa['name'], $target['name']], $content);
        $contentSms .= PHP_EOL.trans('form.sms.post');

        Sms::message($santa['phone'], $contentSms);
    }
}
