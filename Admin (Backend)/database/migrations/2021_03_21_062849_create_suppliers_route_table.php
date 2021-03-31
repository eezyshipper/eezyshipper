<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersRouteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers_route', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('suppliers_id');
//            $table->foreign('suppliers_id')->references('id')->on('suppliers')->onDelete('cascade');
            $table->string('suppliers_route_from')->nullable();
            $table->string('suppliers_route_to')->nullable();

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
        Schema::dropIfExists('suppliers_route');
    }
}
