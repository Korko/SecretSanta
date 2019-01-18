<?php

namespace Tests\Feature;

use App\DearSantaDraw;
use App\Draw;

class CleanupTest extends RequestCase
{
    use \Illuminate\Foundation\Testing\DatabaseMigrations;
    use \Illuminate\Foundation\Testing\DatabaseTransactions;

    public function testDrawNotExpired()
    {
        $this->assertEquals(0, Draw::count());
        $draw = factory(Draw::class)->create();
        $this->assertEquals(1, Draw::count());
        $this->assertDatabaseHas('draws', ['id' => $draw->id]);

        Draw::cleanup();

        $this->assertEquals(1, Draw::count());
        $this->assertDatabaseHas('draws', ['id' => $draw->id]);
    }

    public function testDrawExpired()
    {
        $this->assertEquals(0, Draw::count());
        $draw = factory(Draw::class)->states('expired')->create();
        $this->assertEquals(1, Draw::count());
        $this->assertDatabaseHas('draws', ['id' => $draw->id]);

        Draw::cleanup();

        $this->assertEquals(0, Draw::count());
    }
}
