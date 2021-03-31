<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupplierChargeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supplier_chargees', function (Blueprint $table) {
            $table->id();
            $table->integer('suppliers_route_id');
            $table->integer('suppliers_id');
            $table->tinyInteger('supplier_chargees_weight_from');
            $table->string('supplier_chargees_weight_to');
            $table->float('supplier_chargees_rate');
            $table->float('supplier_chargees_markup');
            $table->enum('supplier_chargees_status', ['0', '1']);
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
        Schema::dropIfExists('supplier_chargees');
    }
}
