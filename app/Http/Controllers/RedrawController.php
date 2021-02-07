<?php

namespace App\Http\Controllers;

use App\Collections\ParticipantsCollection;
use App\Exceptions\SolverException;
use App\Models\Draw;
use App\Models\Participant;
use App\Notifications\SuggestRedraw;
use Solver;

class RedrawController extends Controller
{
    protected function getRedraw(ParticipantsCollection $participants)
    {
        $participants = $participants->appendTargetToExclusions();
        return Solver::one($participants->toArray(), $participants->pluck('exclusions.*.id', 'id')->toArray());
    }

    protected function canRedraw(ParticipantsCollection $participants)
    {
        try {
            $this->getRedraw($participants);

            return true;
        } catch (SolverException $e) {
            return false;
        }
    }

    public function suggestRedraw(Draw $draw)
    {
        if (! $this->canRedraw($draw->participants)) {
            return response()->json([
                'message' => ''
            ], 403);
        }

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

        dd($this->getRedraw($participants)); // TODO

        return '';
    }
}