<?php

namespace App\Models\Subscriptions;

use App\Models\User;
use App\Services\Stripe\StripeService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Sushi\Sushi;

class Invoice extends Model
{
    use HasFactory, Sushi;


    public $incrementing = false;

    protected $keyType = 'string';

    protected $schema =
    [
        'id' => 'string',
        'subscription_id' => 'string',
        'customer_id' => 'string',
        'amount_due' => 'float',
        'amount_paid' => 'float',

    ];



    public function getRows()
    {
        $stripeInvoice = (new StripeService())->invoice();
        // dd($stripePrice->all());

        $invoices = collect($stripeInvoice->all()->data)->map(function($data){
            // dd($data->toArray());
            return [
                 'id'=> $data->id,
                 'customer_name' => $data->customer_name,
                 'customer_id'=>$data->customer,
                 'subscription_id' => $data->subscription,
                 'amount_due'=> $data->amount_due,
                 'amount_paid'=> $data->amount_paid,
                 'subtotal'=> $data->subtotal,
                 'billing_reason' => $data->billing_reason,
                 'total_discount_amount'=> $data->total_discount_amount,
                 'total_tax_amount'=> $data->total_tax_amount,
                 'total_excluding_tax'=> $data->total_excluding_tax
            ];
        })->toArray();
        return $invoices;

    }


    protected function sushiShouldCache()
    {
        return true;
    }


    public function subscription()
    {
        return $this->belongsTo(Subscription::class,'subscription_id','stripe_id');
    }


    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id','stripe_id');
    }
}
