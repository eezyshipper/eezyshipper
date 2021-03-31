<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReturnPercelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('return_percel', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('parcels_id');
            $table->unsignedInteger('users_id');
            $table->unsignedInteger('warehouses_id');
//            $table->foreign('parcels_id')->references('id')->on('parcels')->onDelete('cascade');
//            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');
//            $table->foreign('warehouses_id')->references('id')->on('warehouses')->onDelete('cascade');
            $table->string('return_percel_return_to');
            $table->string('return_percel_reseon');
            $table->mediumtext('return_percel_brief');
            $table->enum('return_percel_status', ['0', '1'])->nullable()->default(0);



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
        Schema::dropIfExists('return_percel');
    }
}
