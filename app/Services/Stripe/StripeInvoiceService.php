<?php
namespace App\Services\Stripe;
use Stripe\Stripe;
use Stripe\Price;
use App\Models\Subscriptions\Plan;
use Exception;
use Laravel\Cashier\Invoice;
use Stripe\Product;

class StripeInvoiceService extends StripeBase {

    // private $canQuery = false;

    public function __construct(private $canQuery = false)
    {

    }


    public function all(): bool {

        try{
            $invoices = Invoice::all();
        }
        catch(Exception $e){

            throw new Exception($e->getMessage());

        }

        return $invoices;
    }


    public function find(){

       $this->canQuery = true;
       return $this;

    }

    public function withSubscription($subscriptionId){
        if(!$this->canQuery)
        {
            throw  new Exception("You can call withSubscription only with find() method");
        }
        try{
            $invoices = Invoice::all([
                'subscription' => $subscriptionId,
            ]);
        }
        catch(Exception $e){

            throw new Exception($e->getMessage());
        }

        return $invoices;
    }

    public function withCustomer($subscriptionId){
        if(!$this->canQuery)
        {
            throw  new Exception("You can call withCustomer only with find() method");
        }
        try{
            $invoices = Invoice::all([
                'customer' => $subscriptionId,
            ]);
        }
        catch(Exception $e){

            throw new Exception($e->getMessage());
        }

        return $invoices;
    }


    public function delete($price_id)
    {



    }
}
