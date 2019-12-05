<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDearSantasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dear_santas', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('draw_id');
            $table->string('santa_name');
            $table->string('santa_email');
            $table->string('challenge');

            $table->foreign('draw_id')->references('id')->on('draws')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dear_santas');
    }
}