<?php
namespace App\Services;
use Stripe\Stripe;
use Stripe\Price;
use App\Models\Subscriptions\Plan;
use Exception;
use Stripe\Product;

class StripeService {

    private $apiKey, $apiSecret, $planModel;

    public function __construct()
    {
        $this->apiKey = env("STRIPE_KEY");
        $this->apiSecret = env("STRIPE_SECRET");
        Stripe::setApiKey($this->apiSecret);
        $this->planModel = new Plan();

    }


    public function getPlans(): bool {

        $prices = Price::all(['limit' =>100]);

        if(!filled($prices)) return false;

        foreach($prices as $price){
            // dd($price);
            $product = Product::retrieve($price->product);

            $this->planModel->updateOrCreate(['stripe_price' => $price->id ],
                [
                    'product_id' => $price->product,
                    'product_name' =>  $product->name,
                    'price' => $price->unit_amount,
                    'currency' => $price->currency,
                    'billing_scheme' => $price->billing_scheme,
                    'type'=> $price->type,
                    'interval' => ucfirst($price->recurring?->interval)
                ]
            );
        }

        return true;

        // dd('success');

    }


    public function create_plan(){

    }


    public function delete_price($price_id)
    {
        try{
            $price = Price::retrieve($price_id);
            // dd($price);
            $price->active = false;
            $price->save();
        }
        catch(Exception $e)
        {
            // dd($e->getMessage());
            return false;
        }

        return true;


    }
}
