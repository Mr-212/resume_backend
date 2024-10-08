<?php

namespace App\Models\Subscriptions;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Plan extends Model
{
    use HasFactory, UUID;

    protected $table = 'subscripton_plans';
    protected $fillable = ['stripe_id','identifier' ,'title','interval','type','status', 'price','currency'];

    const PLAN_TYPES = ['Recurring','Fixed'];
    const PLAN_INTERVAL = ['Free','Day','Week','Month','Quarter','Year'];

    public function subscription(): HasOne
    {
        return $this->hasOne(subscription::class);
    }
}
