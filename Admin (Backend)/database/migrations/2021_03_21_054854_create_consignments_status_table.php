<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsignmentsStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consignments_status', function (Blueprint $table) {
            $table->id();
            $table->string('props_prefix');
            $table->tinyInteger('props_current_id');
            $table->enum('props_opening_day', ['0', '1'.'2','3','4','5','6']);
            $table->string('props_time');
            $table->integer('max_volume');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consignments_status');
    }
}
