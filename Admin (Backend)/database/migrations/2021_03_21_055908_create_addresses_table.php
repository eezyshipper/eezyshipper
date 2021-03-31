<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('addresses_zipcode')->nullable();
            $table->string('addresses_ln1_street_house')->nullable();
            $table->string('addresses_ln1_area_postcode')->nullable();
            $table->string('addresses_ln3_extrainfo')->nullable();
            $table->integer('states_cities_id')->nullable();
            $table->integer('countries_id')->nullable();
            $table->timestamps();
//            $table->foreign('states_cities_id')->references('id')->on('states_cities');
//            $table->foreign('countries_id')->references('id')->on('countries');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
