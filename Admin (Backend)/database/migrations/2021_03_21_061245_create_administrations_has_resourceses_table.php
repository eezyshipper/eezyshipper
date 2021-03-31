<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdministrationsHasResourcesesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('administrations_has_resourceses', function (Blueprint $table) {
            $table->id();
            $table->integer('administrations_id');
            $table->integer('resourceses_id');
            $table->integer('admins_permission_id');
            $table->integer('users_id');

            $table->timestamps();

//            $table->foreign('administrations_id')->references('id')->on('administrations');
//            $table->foreign('resourceses_id')->references('id')->on('parcels');
//            $table->foreign('admins_permission_id')->references('id')->on('resourceses');
//            $table->foreign('users_id')->references('id')->on('admins_permission');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('administrations_has_resourceses');
    }
}
