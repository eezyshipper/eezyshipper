<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsPermissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins_permission', function (Blueprint $table) {
            $table->id();
            $table->enum('admins_permission_permission', ['B','R','E','A','D']);
            $table->enum('admins_permission_status', ['-1','0','1']);
            $table->integer('users_id');
            $table->timestamps();

//            $table->foreign('users_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins_permission');
    }
}
