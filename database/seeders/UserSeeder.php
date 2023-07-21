<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
Use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory()->create([

        //     'id' => Str::uuid(),
        //     'name' => 'Ali Raza',
        //     'email' => 'raza_997@hotmail.com',
        //     'password' => Hash::make('thisisnotme')
        // ]);

        \App\Models\User::updateOrCreate([ 'email' => 'raza_997@hotmail.com'],[
            'id' => Str::uuid(),
            'name' => 'Ali Raza',
            'password' => Hash::make('thisisnotme')
        ]);

        \App\Models\User::updateOrCreate([ 'email' => 'raza.ar10@gmail.com'],[
            'id' => Str::uuid(),
            'name' => 'Ali Raza',
            'password' => Hash::make('thisisnotme')
        ]);
    }
}
