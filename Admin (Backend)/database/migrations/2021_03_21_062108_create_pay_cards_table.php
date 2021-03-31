<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pay_cards', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('users_id');
            $table->enum('pay_cards_type', ['0', '1']);
            $table->string('pay_cards_number');
            $table->string('pay_cards_expire_at');
            $table->string('pay_cards_cvc');
            $table->enum('pay_cards_allow_auto_renual', ['0', '1'])->nullable()->default(0);

//            $table->foreign('users_users_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('pay_cards');
    }
}
