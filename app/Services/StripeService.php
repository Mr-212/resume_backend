<?php
namespace App\Services;
use Stripe\Stripe;
use Stripe\Price;
use App\Models\Subscriptions\Plan;

class StripeService {

    private $apiKey, $apiSecret, $planModel;

    public function __construct()
    {
        $this->apiKey = env("STRIPE_KEY");
        $this->apiSecret = env("STRIPE_SECRET");
        Stripe::setApiKey($this->apiSecret);
        $this->planModel = new Plan();

    }


    public function getPlans(){
        $prices = Price::all(['limit' =>100]);

        foreach($prices as $price){
            dd($price);
            $this->planModel->updateOrCreate(['stripe_id' => $price->id],
                ['title' => '']
            );
        }

        dd($prices->data);

    }


    public function createPlan(){

    }
}
