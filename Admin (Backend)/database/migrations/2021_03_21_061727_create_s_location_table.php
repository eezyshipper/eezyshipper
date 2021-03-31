<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSLocationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('s_location', function (Blueprint $table) {
            $table->id();
            $table->string('suppliers_id');
            $table->integer('addresses_id');
            $table->timestamps();
//            $table->foreign('suppliers_id')->references('id')->on('suppliers');
//            $table->foreign('addresses_id')->references('id')->on('addresses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('s_location');
    }
}
