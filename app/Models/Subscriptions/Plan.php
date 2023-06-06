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
    protected $fillable = ['stripe_id', 'identifier' ,'title','price','currency'];


    public function subscription(): HasOne
    {
        return $this->hasOne(subscription::class);
    }
}
