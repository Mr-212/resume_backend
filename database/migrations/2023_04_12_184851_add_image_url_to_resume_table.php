<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('resume_profile', function (Blueprint $table) {
            $table->text('job_description')->change();
            $table->string('image_url',500)->after('facebook_url')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('resume_profile', function (Blueprint $table) {
            // $table->string('job_description')->change();
            $table->dropColumn('image_url');
        });
    }
};
