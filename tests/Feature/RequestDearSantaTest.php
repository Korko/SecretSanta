<?php

use App\Mail\DearSanta;
use App\Mail\TargetDrawn;
use App\Models\Draw;
use Illuminate\Support\Facades\URL;

test('a participant can write to their santa', function () {
    Mail::fake();

    $draw = Draw::factory()
        ->hasParticipants(3)
        ->create();

    // For security issues, the key is only sent by mail and never stored
    // So fetch it from the mail
    $links = [];
    Mail::assertSent(function (TargetDrawn $mail) use (&$links) {
        return $links[] = $mail->dearSantaLink;
    });
    assertEquals(count($draw->participants), count($links));

    foreach ($links as $id => $link) {
        // Get the form page (just to check http code)
        $response = $this->get($link);
        assertEquals(200, $response->status(), $response->__toString());

        // Check data stored are decryptable
        $path = parse_url($link, PHP_URL_PATH);
        $participant = URLParser::parseByName('dearsanta', $path)->participant;
        assertEquals($draw->participants[$id]->santa->id, $participant->santa->id);

        // Try to contact santa
        ajaxPost(URL::signedRoute('dearsanta.contact', ['participant' => $participant->hash]), [
                'content' => 'test dearsanta mail content',
            ])
            ->assertSuccessful()
            ->assertJsonStructure(['message']);

        assertHasMailPushed(DearSanta::class, $participant->santa->email);
    }
});