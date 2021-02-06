<?php

namespace App\Mail;

use App\Models\Participant;
use DrawCrypt;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\URL;

class SuggestRedraw extends Mailable
{
    use Queueable;

    public $participantName;
    public $organizerName;
    public $targetName;
    public $acceptLink;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Participant $participant)
    {
        $this->subject = __('emails.suggest_redraw.title', [
            'draw' => $participant->draw->id,
        ]);

        $this->participantName = $participant->name;
        $this->organizerName = $participant->draw->organizer->name;
        $this->targetName = $participant->target->name;

        $this->acceptLink = URL::signedRoute('acceptRedraw', ['participant' => $participant->hash]);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.suggest_redraw')
                    ->text('emails.suggest_redraw_plain');
    }
}
