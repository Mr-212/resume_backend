<?php

namespace App\Models\Subscriptions;

use App\Models\User;
use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Cashier\Subscription as CashierSubscription;

class Subscription extends CashierSubscription
{
    use HasFactory, UUID;

    protected $table = 'subscriptions';

    protected $fillable = ['user_id','name','stripe_id','stripe_status','stripe_price','trial_ends_at','ends_at'];


    public function plan(){

        return $this->belongsTo(Plan::class, 'stripe_price','stripe_price');
    }

    public function user() {
        return $this->belongsTo(User::class,'user_id');
    }
}
