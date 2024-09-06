<?php
namespace app\Services\Stripe;
use App\Services\Stripe\StripePlanService;
use Stripe\Stripe;
use Stripe\Price;
use App\Models\Subscriptions\Plan;
use Exception;
use Stripe\Product;


abstract class StripeBase {

    private $apiKey, $apiSecret, $planModel;

    public function __construct()
    {
        $this->apiKey = env("STRIPE_KEY");
        $this->apiSecret = env("STRIPE_SECRET");
        Stripe::setApiKey($this->apiSecret);
        $this->planModel = new Plan();
    }
}
