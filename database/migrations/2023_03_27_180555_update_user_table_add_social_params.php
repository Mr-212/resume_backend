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
        Schema::table('users', function (Blueprint $table) {
            $table->string('password')->change()->nullable();
            $table->string('first_name')->nullable()->after('name');
            $table->string('last_name')->nullable()->after('first_name');
            $table->string('phone')->nullable()->after('email');
            $table->boolean('is_social')->default(0)->after('phone');
            $table->string('social_plateform')->nullable()->after('is_social');
            $table->string('social_profile_img_link')->nullable()->after('social_plateform');
            $table->boolean('social_email_verified')->default(0)->nullable()->after('social_profile_img_link');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('password')->change();
            $table->dropColumn('first_name');
            $table->dropColumn('last_name');
            $table->dropColumn('phone');
            $table->dropColumn('is_social');
            $table->dropColumn('social_plateform');
            $table->dropColumn('social_profile_img_link');
            $table->dropColumn('social_email_verified');
        });
    }
};
