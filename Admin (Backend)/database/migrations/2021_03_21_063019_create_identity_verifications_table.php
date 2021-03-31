<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIdentityVerificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('identity_verifications', function (Blueprint $table) {
            $table->id();
            $table->integer('users_id');
            $table->string('doc_type')->nullable();
            $table->string('f_name')->nullable();
            $table->string('l_name')->nullable();
            $table->string('identify_verifications_doc_no')->nullable();
            $table->date('identity_verifications_valid_from')->nullable();
            $table->date('identity_verifications_expire')->nullable();
            $table->datetime('identity_verifications_varify_at')->nullable();
            $table->integer('users_varified_by')->nullable();
            $table->enum('varification_status', ['-1', '0','1'])->nullable()->default(0);
            $table->enum('identity_verifications_document_for', ['0','1'])->nullable()->default(1);
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
        Schema::dropIfExists('identity_verifications');
    }
}
