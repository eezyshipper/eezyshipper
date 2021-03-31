<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transections', function (Blueprint $table) {
            $table->id();
            $table->integer('parcels_parcels_id')->unsigned();
            $table->integer('parcels_users_users_id')->unsigned();
            $table->integer('parcels_warehouses_warehouses_id')->unsigned();
            $table->integer('payments_payments_id')->unsigned();
            $table->integer('consignments_id')->nullable();
            $table->integer('transection_status_id')->unsigned();
            $table->integer('suppliers_chargees_id')->unsigned();
            $table->string('transections_from');
            $table->string('transections_destination');
            $table->date('transections_eta');
            $table->integer('suppliers_route_id')->unsigned();
            $table->float('transections_price')->nullable();
            $table->integer('suppliers_id')->unsigned();
//            $table->foreign('parcels_parcels_id')->references('id')->on('parcels')->onDelete('cascade');
//            $table->foreign('parcels_users_users_id')->references('users_id')->on('parcels')->onDelete('cascade');
//            $table->foreign('parcels_warehouses_warehouses_id')->references('warehouses_id')->on('parcels')->onDelete('cascade');
//            $table->foreign('payments_payments_id')->references('id')->on('payments')->onDelete('cascade');
//            $table->foreign('consignments_id')->references('id')->on('consignments')->onDelete('cascade');
//            $table->foreign('transection_status_id')->references('id')->on('transection_status')->onDelete('cascade');
//            $table->foreign('suppliers_chargees_id')->references('id')->on('supplier_chargees')->onDelete('cascade');
//            $table->foreign('suppliers_route_id')->references('id')->on('suppliers_route')->onDelete('cascade');
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
        Schema::dropIfExists('transections');
    }
}
