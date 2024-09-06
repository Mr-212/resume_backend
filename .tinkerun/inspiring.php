<?php

use App\Services\Stripe\StripeService;

$invoice = (new StripeService())->invoice();
dd($invoice->all());
