<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersSubscriptionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_subscription', function (Blueprint $table) {
            $table->id();
            $table->integer('users_id');
            $table->integer('subscriptions_id');
            $table->integer('payments_id');
            $table->enum('users_subscription_status', ['-1', '0'.'1']);
            $table->dateTime('users_subscription_activated_at');
            $table->dateTime('users_subscription_expire_at');
//            $table->foreign('payments_id')->references('id')->on('payments');
//            $table->foreign('subscriptions_id')->references('id')->on('subscriptions');
//            $table->foreign('users_id')->references('id')->on('users');
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
        Schema::dropIfExists('users_subscription');
    }
}
