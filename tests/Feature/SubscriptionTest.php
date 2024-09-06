<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SubscriptionTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_subscription()
    {
        $response = $this->get('/subscription');

        $response->assertStatus(200);

    }

    public function test_plan_page(){
        // $route = route('subscription.create', ['plan_id'=>'price_1NFiMIDoh4KpmE6ILdPoqNt5']);
        // $response = $this->get($route);
        // $response = $this->get('/subscription/create', ['plan_id'=>'price_1NFiMIDoh4KpmE6ILdPoqNt5']);
        // // dd($response);
        // $response->assertSuccessful();
    }


}
