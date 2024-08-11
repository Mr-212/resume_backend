<?php

namespace App\Models\Subscriptions;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Cashier\SubscriptionItem as CashierSubscriptionItem;

class SubscriptionItem extends CashierSubscriptionItem
{
    use HasFactory, UUID;

    protected $table = 'subscription_items';

    protected $fillable = ['subscription_id','stripe_id','stripe_product','stripe_price','quantity'];


}
