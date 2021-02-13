<?php
use App\Models\Draw;
use App\Mail\SuggestRedraw;

test('the organizer can organize a redraw', function () {
    Mail::fake();

    $draw = createDatabaseDraw(3);

    assertFalse($draw->fresh()->redraw);

    $path = URL::signedRoute('organizerPanel.suggestRedraw', [
        'draw' => $draw->hash
    ]);

    ajaxGet($path)
        ->assertJsonStructure(['message'])
        ->assertStatus(200);

    assertTrue($draw->fresh()->redraw);

    $draw->participants->each(function ($participant) {
        assertHasMailPushed(SuggestRedraw::class, $participant->email);
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

test('participants can accept the redraw', function () {
    Mail::fake();

    $draw = createDatabaseDraw(3);

    $path = URL::signedRoute('organizerPanel.suggestRedraw', [
        'draw' => $draw->hash
    ]);
    ajaxGet($path)
        ->assertJsonStructure(['message'])
        ->assertStatus(200);

    $links = [];
    Mail::assertSent(function (SuggestRedraw $mail) use (&$links) {
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

});

test('the organizer can process the redraw');

test('the redraw gives other targets');