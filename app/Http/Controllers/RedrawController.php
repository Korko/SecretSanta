<?php

namespace App\Http\Controllers;

use App\Models\Draw;
use App\Models\Participant;
use App\Notifications\SuggestRedraw;
use Solver;

class RedrawController extends Controller
{
    public function suggestRedraw(Draw $draw)
    {
        $draw->redraw = true;
        $draw->save();

        $draw->participants->each(function ($participant) {
            $participant->notify(new SuggestRedraw);
        });

        return response()->json([
            'message' => trans('organizer.suggest_redraw.message'),
        ]);
    }

    public function accept(Participant $participant)
    {
        $participant->redraw = true;
        $participant->save();

        return '';
    }

    public function redraw(Draw $draw)
    {
        $participants = $draw->participants->filter(function ($participant) {
            return $participant->redraw;
        });

        $hat = Solver::one($participants, array_column($participants, 'exclusions'));

        dd($hat); // TODO

        return '';
    }
}