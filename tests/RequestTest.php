<?php

require_once 'RequestCase.php';

use Korko\SecretSanta\Draw;
use Korko\SecretSanta\Participant;

class RequestTest extends RequestCase
{
    public function setUp()
    {
        parent::setUp();
        Artisan::call('migrate');
    }

    public function tearDown()
    {
        Artisan::call('migrate:reset');
        parent::tearDown();
    }

    public function testOnly_two()
    {
        Recaptcha::shouldReceive('verify')->once()->andReturn(true);

        Mail::shouldReceive('raw')
            ->once()
            ->with('#test mail toto => tata#', Mockery::on(function ($closure) {
                $message = Mockery::mock('Illuminate\Mailer\Message');
                $message->shouldReceive('to')
                    ->with('test@test.com', 'toto')
                    ->andReturn(Mockery::self());
                $message->shouldReceive('subject')
                    ->with('test mail title')
                    ->andReturn(Mockery::self());
                $closure($message);

                return true;
            }))
            ->andReturn(true);

        Sms::shouldReceive('message')
            ->once()
            ->with('0612345678', '#test sms "tata\' => &toto#')
            ->andReturn(true);

        $this->assertEquals(0, Draw::count());
        $this->assertEquals(0, Participant::count());

        $content = $this->ajaxPost('/', [
            'g-recaptcha-response' => 'mocked',
            'name'                 => ['toto', 'tata'],
            'email'                => ['test@test.com', ''],
            'phone'                => ['', '0612345678'],
            'exclusions'           => [],
            'title'                => 'test mail title',
            'contentMail'          => 'test mail {SANTA} => {TARGET}',
            'contentSMS'           => 'test sms "{SANTA}\' => &{TARGET}',
            'dearsanta'            => '0',
        ], 200);
        $this->assertEquals(['Envoyé avec succès !'], $content);

        $this->assertEquals(0, Draw::count());
        $this->assertEquals(0, Participant::count());
    }

    public function testSeveral()
    {
        Recaptcha::shouldReceive('verify')->once()->andReturn(true);

        Mail::shouldReceive('raw')
            ->once()
            ->with('#test mail toto => tata#', Mockery::on(function ($closure) {
                $message = Mockery::mock('Illuminate\Mailer\Message');
                $message->shouldReceive('to')
                    ->with('test@test.com', 'toto')
                    ->andReturn(Mockery::self());
                $message->shouldReceive('subject')
                    ->with('test mail title')
                    ->andReturn(Mockery::self());
                $closure($message);

                return true;
            }))
            ->andReturn(true);

        Mail::shouldReceive('raw')
            ->once()
            ->with('#test mail tutu => toto#', Mockery::on(function ($closure) {
                $message = Mockery::mock('Illuminate\Mailer\Message');
                $message->shouldReceive('to')
                    ->with('test2@test.com', 'tutu')
                    ->andReturn(Mockery::self());
                $message->shouldReceive('subject')
                    ->with('test mail title')
                    ->andReturn(Mockery::self());
                $closure($message);

                return true;
            }))
            ->andReturn(true);

        Sms::shouldReceive('message')
            ->once()
            ->with('0612345678', '#test sms "tata\' => &tutu#')
            ->andReturn(true);

        Sms::shouldReceive('message')
            ->once()
            ->with('0712345678', '#test sms "tutu\' => &toto#')
            ->andReturn(true);

        $this->assertEquals(0, Draw::count());
        $this->assertEquals(0, Participant::count());

        $content = $this->ajaxPost('/', [
            'g-recaptcha-response' => 'mocked',
            'name'                 => ['toto', 'tata', 'tutu'],
            'email'                => ['test@test.com', '', 'test2@test.com'],
            'phone'                => ['', '0612345678', '0712345678'],
            'exclusions'           => [['2'], ['0'], ['1']],
            'title'                => 'test mail title',
            'contentMail'          => 'test mail {SANTA} => {TARGET}',
            'contentSMS'           => 'test sms "{SANTA}\' => &{TARGET}',
            'dearsanta'            => '0',
        ], 200);
        $this->assertEquals(['Envoyé avec succès !'], $content);

        $this->assertEquals(0, Draw::count());
        $this->assertEquals(0, Participant::count());
    }

    public function testDearsanta()
    {
        Recaptcha::shouldReceive('verify')->once()->andReturn(true);

        Mail::shouldReceive('raw')
            ->once()
            ->with('#test mail toto => tata.+/dearsanta/[0-9]+\#[a-f0-9]+#s', Mockery::on(function ($closure) {
                $message = Mockery::mock('Illuminate\Mailer\Message');
                $message->shouldReceive('to')
                    ->with('test@test.com', 'toto')
                    ->andReturn(Mockery::self());
                $message->shouldReceive('subject')
                    ->with('test mail title')
                    ->andReturn(Mockery::self());
                $closure($message);

                return true;
            }))
            ->andReturn(true);

        Mail::shouldReceive('raw')
            ->once()
            ->with('#test mail tata => toto.+/dearsanta/[0-9]+\#[a-f0-9]+#s', Mockery::on(function ($closure) {
                $message = Mockery::mock('Illuminate\Mailer\Message');
                $message->shouldReceive('to')
                    ->with('test2@test.com', 'tata')
                    ->andReturn(Mockery::self());
                $message->shouldReceive('subject')
                    ->with('test mail title')
                    ->andReturn(Mockery::self());
                $closure($message);

                return true;
            }))
            ->andReturn(true);

        Sms::shouldReceive('message')
            ->never();

        $this->assertEquals(0, Draw::count());
        $this->assertEquals(0, Participant::count());

        $content = $this->ajaxPost('/', [
            'g-recaptcha-response' => 'mocked',
            'name'                 => ['toto', 'tata'],
            'email'                => ['test@test.com', 'test2@test.com'],
            'phone'                => ['', ''],
            'exclusions'           => [],
            'title'                => 'test mail title',
            'contentMail'          => 'test mail {SANTA} => {TARGET}',
            'contentSMS'           => 'test sms "{SANTA}\' => &{TARGET}',
            'dearsanta'            => '1',
        ], 200);
        $this->assertEquals(['Envoyé avec succès !'], $content);

        $this->assertEquals(1, Draw::count());
        $this->assertEquals(2, Participant::count());
    }
}
