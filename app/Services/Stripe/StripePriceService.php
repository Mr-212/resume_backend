<?php
namespace App\Services\Stripe;
use Stripe\Stripe;
use Stripe\Price;
use App\Models\Subscriptions\Plan;
use Exception;
use Stripe\Product;

class StripePriceService extends StripeBase {



    public function __construct()
    {
        parent::__construct();
    }


    public function all(){



        return true;

        // dd('success');

    }


    public function create_plan(){

    }


    public function deactivate($price_id)
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
