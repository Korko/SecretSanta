<?php

use App\Models\Draw;
use App\Models\Participant;
use App\Mail\SuggestRedraw as SuggestRedrawMail;
use App\Notifications\SuggestRedraw as SuggestRedrawNotification;
use App\Notifications\TargetDrawn;

test('the organizer can organize a redraw', function () {
    Notification::fake();

    $draw = Draw::factory()
        ->hasParticipants(3)
        ->create();

    assertFalse($draw->fresh()->redraw);

    $path = URL::signedRoute('organizerPanel.suggestRedraw', [
        'draw' => $draw->hash
    ]);

    ajaxGet($path)
        ->assertJsonStructure(['message'])
        ->assertStatus(200);

    assertTrue($draw->fresh()->redraw);

    $draw->participants->each(function ($participant) {
        Notification::assertSentTo($participant, SuggestRedrawNotification::class);
    });
});

test('the organizer cannot organize a redraw if only one solution possible', function ($participants, $targets) {
    $draw = createServiceDraw($participants);

    assertFalse($draw->fresh()->redraw);

    $path = URL::signedRoute('organizerPanel.suggestRedraw', [
        'draw' => $draw->hash
    ]);

    ajaxGet($path)
        ->assertJsonStructure(['message'])
        ->assertStatus(403);

    assertFalse($draw->fresh()->redraw);
})->with('unique participants list');

test('participants can accept the redraw by mail', function () {
    Mail::fake();

    $draw = Draw::factory()
        ->hasParticipants(3)
        ->create();

    $path = URL::signedRoute('organizerPanel.suggestRedraw', [
        'draw' => $draw->hash
    ]);
    ajaxGet($path)
        ->assertJsonStructure(['message'])
        ->assertStatus(200);

    $links = [];
    Mail::assertSent(function (SuggestRedrawMail $mail) use (&$links) {
        return $links[] = $mail->acceptLink;
    });
    assertEquals(count($draw->participants), count($links));

    foreach ($links as $id => $link) {
        $participant = URLParser::parseByName('acceptRedraw', $link)->participant;

        assertFalse($participant->redraw);

        $response = $this->get($link);
        assertEquals(200, $response->status(), $response->__toString());

        assertTrue($participant->fresh()->redraw);
    }
});

test('the organizer cannot process the redraw until a solution is possible', function () {
    $draw = Draw::factory()
        ->redrawing()
        ->hasParticipants(3)
        ->create();

    $this->assertFalse($draw->canRedraw);

    $draw->participants[0]->redraw = true;
    $draw->participants[0]->save();

    $this->assertFalse($draw->canRedraw);

    $draw->participants[1]->redraw = true;
    $draw->participants[1]->save();

    $this->assertFalse($draw->canRedraw);

    $draw->participants[2]->redraw = true;
    $draw->participants[2]->save();

    $this->assertTrue($draw->canRedraw);
});

test('the organizer can process the redraw', function () {
    Notification::fake();

    $draw = Draw::factory()
        ->redrawing()
        ->hasParticipants(3, ['redraw' => true])
        ->create();

    $target1 = $draw->participants[0]->target;
    $target2 = $draw->participants[1]->target;
    $target3 = $draw->participants[2]->target;

    Notification::assertTimesSent(count($draw->participants), TargetDrawn::class);

    $path = URL::signedRoute('organizerPanel.redraw', [
        'draw' => $draw->hash
    ]);
    ajaxGet($path)
        ->assertJsonStructure(['message'])
        ->assertStatus(200);

    Notification::assertTimesSent(count($draw->participants) * 2, TargetDrawn::class);

    $draw->participants = $draw->participants->fresh();
    $this->assertNotEquals($target1->id, $draw->participants[0]->target->id);
    $this->assertNotEquals($target2->id, $draw->participants[1]->target->id);
    $this->assertNotEquals($target3->id, $draw->participants[2]->target->id);
});