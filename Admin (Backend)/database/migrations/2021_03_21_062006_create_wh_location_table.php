<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWHLocationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wh_location', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('warehouses_id');
            $table->unsignedInteger('addresses_id');


//            $table->foreign('warehouses_id')->references('id')->on('warehouses')->onDelete('cascade');
//            $table->foreign('addresses_id')->references('id')->on('addresses')->onDelete('cascade');
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
        Schema::dropIfExists('wh_location');
    }
}
