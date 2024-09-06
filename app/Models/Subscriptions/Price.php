<?php

namespace App\Models\Subscriptions;

use App\Services\Stripe\StripeService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class Price extends Model
{
    use HasFactory, Sushi;


    public function getRows()
    {
        $stripePrice = (new StripeService())->invoice();
        dd($stripePrice->all());

    }
}
