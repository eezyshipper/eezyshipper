<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consignments', function (Blueprint $table) {
            $table->id();
            $table->string('consignments_col');
            $table->integer('consignments_props_id');
            $table->integer('consignments_number');
            $table->integer('consignments_status_id');
//            $table->foreign('consignments_props_id')->references('id')->on('consignments_props');
//            $table->foreign('consignments_status_id')->references('id')->on('consignments_status');
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
        Schema::dropIfExists('consignments');
    }
}
