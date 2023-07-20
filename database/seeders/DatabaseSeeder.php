<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([

        //     'id' => Str::uuid(),
        //     'name' => 'test',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            PlanSeeder::class,
            ResumeSeeder::class,
        ]);

    }

    
}
