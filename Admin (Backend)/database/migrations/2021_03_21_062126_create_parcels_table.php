<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParcelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parcels', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('users_id');
            $table->string('parcels_bought_from');
            $table->unsignedInteger('warehouses_id');
            $table->enum('parcels_status', ['0', '1'])->nullable()->default(1);
            $table->float('parcels_weight');
            $table->float('parcels_d_x');
            $table->float('parcels_d_y');
            $table->float('parcels_d_z');
            $table->float('parcels_volumetric_weight');


//            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');
//            $table->foreign('warehouses_id')->references('id')->on('warehouses')->onDelete('cascade');

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
        Schema::dropIfExists('parcels');
    }
}
