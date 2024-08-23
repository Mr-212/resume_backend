<?php

namespace Database\Seeders;

use App\Models\Domain;
use App\Models\Tenant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Event;
use Stancl\Tenancy\Facades\Tenancy;
use Stancl\Tenancy\Jobs\CreateDatabase;

class TenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Domain::truncate();
        // Tenant::truncate();

        $tenant = Tenant::create(['id' => 'site']);
        $tenant->domains()->create(['domain' => 'site.localhost']);
        $tenant->save();
        // Tenancy::tenantDatabases()->create($tenant);
        // event(new CreateDatabase($tenant));
        // tenancy()->initialize($tenant);

        // $tenant2 = Tenant::updateOrCreate(['id' => 'test'], ['name' =>'test']);
        // $tenant2->domains()->updateOrCreate(['domain' => 'test.localhost'], ['domain' => 'test.localhost']);
    }
}
