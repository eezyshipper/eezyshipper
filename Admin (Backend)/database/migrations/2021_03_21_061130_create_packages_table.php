<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->integer('categories_id');
            $table->string('packages_product_desc');
            $table->tinyInteger('packages_product_quantity');
            $table->integer('parcels_id');
            $table->integer('users_id');
            $table->timestamps();

//            $table->foreign('categories_id')->references('id')->on('categories');
//            $table->foreign('parcels_id')->references('id')->on('parcels');
//            $table->foreign('users_id')->references('id')->on('parcels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
}
