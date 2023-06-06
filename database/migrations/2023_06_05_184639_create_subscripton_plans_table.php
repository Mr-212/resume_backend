<?php

use App\Models\Subscriptions\Plan;
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
        Schema::create('subscripton_plans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title')->nullable();
            $table->string('identifier')->nullable();
            $table->string('stripe_id')->nullable();
            $table->boolean('status')->default(1);
            $table->string('currency')->default('usd')->nullable();
            $table->unsignedBigInteger('price')->nullable();
            $table->enum('type', Plan::PLAN_TYPES)->nullable();
            $table->enum('interval',Plan::PLAN_INTERVAL)->nullable();
            

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
        Schema::dropIfExists('subscripton_plans');
    }
};
