<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransectionStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transection_status', function (Blueprint $table) {
            $table->id();
            $table->string('transection_status_name');
            $table->mediumText('transection_status_brief');
            $table->enum('transection_status_type', ['-1','0','1','2']);
            $table->tinyInteger('transection_process_no');
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
        Schema::dropIfExists('transection_status');
    }
}
