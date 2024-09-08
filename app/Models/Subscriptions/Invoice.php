<?php

namespace App\Models\Subscriptions;

use App\Services\Stripe\StripeService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class Invoice extends Model
{
    use HasFactory, Sushi;


    public $incrementing = false;

    protected $keyType = 'string';

    protected $schema =
    [
        'id' => 'string',
        'amount_due' => 'float',
        'amount_paid' => 'float',

    ];



    public function getRows()
    {
        $stripeInvoice = (new StripeService())->invoice();
        // dd($stripePrice->all());

        $invoices = collect($stripeInvoice->all()->data)->map(function($data){
            return [
                 'id'=> $data->id,
                 'amount_due'=> $data->amount_due,
                 'amount_paid'=> $data->amount_paid,
                 'subtotal'=> $data->subtotal,
                 'billing_reason' => $data->billing_reason,
                 'total_discount_amount'=> $data->total_discount_amount,
                 'total_tax_amount'=> $data->total_tax_amount,
                 'total_excluding_tax'=> $data->total_excluding_tax
            ];
        })->toArray();
        // dd($invoices);
        return $invoices;

    }


    protected function sushiShouldCache()
    {
        return false;
    }
}
