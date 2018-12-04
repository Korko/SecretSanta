<?php

namespace Tests\Unit;

use Facades\App\Libs\HatSolver as Solver;
use Tests\TestCase;

class SolverTest extends TestCase
{
    const LOOP_NUMBER = 100;

    public function assertCombination($expected, $combinations, $participants)
    {
        $actual = [];
        foreach ($combinations as $combination) {
            array_walk($combination, function (&$idx) use ($participants) {
                $idx = $participants[$idx];
            });

            $actual[] = implode('', $combination);
        }

        sort($actual);
        sort($expected);

        $this->assertEquals(serialize($actual), serialize($expected));
    }

    public function testNoExclusion()
    {
        $participants = ['A', 'B'];
        $this->assertCombination([
            'BA',
        ], Solver::all($participants), $participants);

        $participants = ['A', 'B', 'C'];
        $this->assertCombination([
            'BCA', 'CAB',
        ], Solver::all($participants), $participants);

        $participants = ['A', 'B', 'C', 'D'];
        $this->assertCombination([
            'BCDA', 'BDAC', 'BADC',
            'CDAB', 'CADB', 'CDBA',
            'DABC', 'DCBA', 'DCAB',
        ], Solver::all($participants), $participants);
    }

    public function testSimpleExclusion()
    {
        // A => C
        $participants = ['A', 'B', 'C'];
        $this->assertCombination([
            'BCA',
        ], Solver::all($participants, [0 => [2]]), $participants);
    }

    /*
        public function testComplexExclusion()
        {
            $participants = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', L'];
            $exclusions = [0 => [1, 2, 3]];

            $this->assertEquals(array(['A' => 'B', 'B' => 'C', 'C' => 'A']), Solver::all($participants, function($elementA, $elementB) use($exclusions) {
                return !isset($exclusions[$elementA]) || !in_array($elementB, $exclusions[$elementA]);
            }));
        }
    */

    public function testImpossibleSolution()
    {
        $participants = ['A', 'B', 'C'];
        $this->assertCombination([], Solver::all($participants, [0 => [1, 2]]), $participants);
    }

    public function testOne()
    {
        $this->assertTrue((function () {
            $solutions = [
                [0 => 1, 1 => 2, 2 => 0],
                [0 => 2, 1 => 0, 2 => 1],
            ];
            $valid = [];

            for ($i = 0; $i < self::LOOP_NUMBER; $i++) {
                $solution = Solver::one(['A', 'B', 'C']);

                $solution_position = array_search($solution, $solutions);
                $valid[$solution_position] = true;

                if (count($valid) === count($solutions)) {
                    return true;
                }
            }

            return false;
        })());
    }

    public function testMass()
    {
        // 702 characters from 'A' to 'ZZ'
        $participants = [];
        for ($n = 'A'; $n !== 'AAA'; $n++) {
            $participants[] = $n;
        }

        Solver::one($participants);
    }
}
