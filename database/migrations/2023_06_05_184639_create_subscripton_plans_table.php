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
        Schema::create('stripe_plans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('stripe_price')->nullable();
            // $table->string('name')->nullable();
            $table->string('product_id')->nullable();
            $table->string('product_name')->nullable();
            $table->boolean('active')->default(1);
            $table->string('billing_scheme')->default('per_unit');
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
        Schema::dropIfExists('stripe_plans');
    }
};
