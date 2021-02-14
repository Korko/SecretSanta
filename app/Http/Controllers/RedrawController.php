<?php

namespace App\Http\Controllers;

use App\Models\Draw;
use App\Models\Participant;
use App\Notifications\SuggestRedraw;
use App\Services\DrawHandler;

class RedrawController extends Controller
{
    public function suggestRedraw(Draw $draw)
    {
        if (! $draw->next_solvable) {
            return response()->json([
                'message' => ''//TODO
            ], 403);
        }

        $draw->update(['redraw' => true]);

        $draw->participants->each->notify(new SuggestRedraw);

        return response()->json([
            'message' => trans('organizer.suggest_redraw.message'),
        ]);
    }

    public function accept(Participant $participant)
    {
        if (! $participant->draw->redraw) {
            return response('', 403);//TODO
        }

        $participant->update(['redraw' => true]);

        return '';//TODO
    }

    public function redraw(Draw $draw)
    {
        DrawHandler::solve($draw, $draw->participants->redrawables()->appendTargetToExclusions());

        $draw->update(['redraw' => false]);
        $draw->participants->each->update(['redraw' => false]);

        return response()->json([
            'message' => trans('organizer.redraw.message'),
        ]);
    }
}