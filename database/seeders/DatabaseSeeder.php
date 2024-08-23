<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
        //     'name' => 'Ali Raza',
        //     'email' => 'raza_997@hotmail.com',
        //     'password' => Hash::make('thisisnotme')
        // ]);

        $this->call([
            UserSeeder::class,
            PlanSeeder::class,
            ResumeSeeder::class,
            TenantSeeder::class
        ]);

    }


}
