<?php

namespace Database\Seeders;

use App\Models\Subscriptions\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::updateOrCreate(['stripe_id' => 'price_1NFiMIDoh4KpmE6ILdPoqNt5',],
        [
            'id' => Str::uuid(),
            'title' => 'Premium',
            'identifier' => 'Premium',
            'price' => 1,
            'interval' => 'Day',
            'type' => 'Recurring',

        ]
        );

        Plan::updateOrCreate(['stripe_id' => 'price_1NFiMIDoh4KpmE6Ir0AUXvj8'],
        [
            'id' => Str::uuid(),
            'title' => 'Premium',
            'identifier' => 'Premium',
            'price' => 5,
            'interval' => 'Week',
            'type' => 'Recurring',


        ]
        );

        Plan::updateOrCreate(['stripe_id' => 'price_1NFzGHDoh4KpmE6IUfTkftyj'],
        [
            'id' => Str::uuid(),
            'title' => 'Premium',
            'identifier' => 'Premium',
            'price' => '10',
            'interval' => 'Month',
            'type' => 'Recurring',

        ]
        );

        // Plan::updateOrCreate(['stripe_id' => 'price_1NFzGHDoh4KpmE6IUfTkftyj'],
        // [
        //     'id' => Str::uuid(),
        //     'title' => 'Premium',
        //     'identifier' => 'Premium',
        //     'price' => '10',
        //     'interval' => 'Month',
        //     'type' => 'Recurring',

        // ]
        // );
    }
}
