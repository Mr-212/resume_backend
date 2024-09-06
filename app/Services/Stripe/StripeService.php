<?php
namespace App\Services\Stripe;
use App\Services\Stripe\StripePlanService;

class StripeService {

    public function __construct()
    {

    }


    public function plan() {
       return new StripePlanService();
    }


    public function price(){
        return new StripePriceService();
    }


    public function invoice(){

        return new StripeInvoiceService();
    }



}
