<?php

namespace App\Traits;

use App\Events\MailStatusUpdated;
use App\Models\Mail as MailModel;

trait UpdatesMailDelivery
{
    public $mail;
    public $version;

    public function store(MailModel $mail)
    {
        $this->mail = $mail;
        $this->version = $mail->version;
    }

    public function delayedUpdateDelivery($status)
    {
        if (isset($this->mail)) {
            return $this->updateDelivery($this->mail->fresh(), $status, $this->version);
        }
    }

    public function updateDelivery(MailModel $mail, $status, $version = null)
    {
        // SQLite does not cast $mail->version as int and $version may be a string too so cast both
        if (! isset($version) or (int)$mail->version === (int)$version) {
            $mail->updateDeliveryStatus($status);

            event(new MailStatusUpdated($mail));
        }

        return $mail;
    }
}