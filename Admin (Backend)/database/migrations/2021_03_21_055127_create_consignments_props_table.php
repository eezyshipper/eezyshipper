<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsignmentsPropsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consignments_props', function (Blueprint $table) {
            $table->id();
            $table->string('consignments_status_name');
            $table->mediumText('consignments_status_brief');
            $table->enum('consignments_status_type', ['-1', '0'.'1','2']);
            $table->tinyInteger('consignments_process_no');
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
        Schema::dropIfExists('consignments_props');
    }
}
