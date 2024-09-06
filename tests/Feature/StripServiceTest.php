<?php

namespace Tests\Feature;

use App\Services\Stripe\StripeService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StripServiceTest extends TestCase
{

    protected $stripeService;
    protected function setUp(): void
    {
        parent::setUp();
        $this->stripeService =  new StripeService();
    }
    /**
     * A basic feature test example.
     */

     public function test_invoice(): void
    {
        // $response = $this->get('/');

        // $response->assertStatus(200);

        $invoice = $this->stripeService->invoice();
        $invoices = $invoice->all();
        dd(collect((array) $invoices->data[0]));
    }
}
