<?php
namespace app\Services\Stripe;
use App\Services\Stripe\StripePlanService;
use Stripe\Stripe;
use Stripe\Price;
use App\Models\Subscriptions\Plan;
use Exception;
use Stripe\Product;


abstract class StripeBase {

    private $apiKey, $apiSecret;

    public function __construct()
    {
        $this->apiKey = env("STRIPE_KEY");
        $this->apiSecret = env("STRIPE_SECRET");
        //$this->apiSecret = "sk_test_51L2wxGDoh4KpmE6IJt9ewcrQ5KNenEV8B7V8GYl9fkfhfC0KYkrJawqAoOwAGGENs0obIagJNfXPlfRciEynwqlM00kvwCakBP";
        Stripe::setApiKey($this->apiSecret);
    }
}
