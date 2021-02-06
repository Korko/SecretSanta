<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDrawRedraw extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('draws', function (Blueprint $table) {
            $table->boolean('redraw')->default(false);
            $table->date('redrawn_at')->nullable();
        });

        Schema::table('participants', function (Blueprint $table) {
            $table->boolean('redraw')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('draws', function (Blueprint $table) {
            $table->dropColumn(['redraw', 'redrawn_at']);
        });

        Schema::table('participants', function (Blueprint $table) {
            $table->dropColumn('redraw');
        });
    }
}
