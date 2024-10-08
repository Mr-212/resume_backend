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
    $table->string('email')->change()->nullable();

    $table->string('first_name')->nullable()->after('name');
    $table->string('last_name')->nullable()->after('first_name');
    $table->string('phone')->nullable()->after('email');
    $table->boolean('is_social')->default(0)->after('phone');
    $table->string('provider')->nullable()->after('is_social');
    $table->string('provider_id')->nullable()->after('provider');
    $table->string('url')->nullable()->after('provider_id');
    $table->string('img_url')->nullable()->after('url');
    $table->boolean('social_email_verified')->default(0)->nullable()->after('img_url');
    $table->string('nickname')->nullable()->after('last_name');
    
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
    $table->dropIfExists('first_name');
    $table->dropColumn('last_name');
    $table->dropColumn('phone');
    $table->dropColumn('is_social');
    $table->dropColumn('provider');
    $table->dropColumn('provider_id');
    $table->dropColumn('img_url');
    $table->dropColumn('url');
    $table->dropColumn('social_email_verified');
    $table->dropColumn('social_email_verified');
    $table->string('password')->change();
    $table->string('email')->change();

    
    });
    }
};
