<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class RunTenantMigrations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenant:migrate-fresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
       Tenant::all()->runForEach(function(){

            // $this->info("Running migrate:fresh for tenant: {$tenant->id}");

            // Run migrate:fresh in the tenant's context
            Artisan::call('migrate:fresh', [
                '--path' => 'database/migrations/tenant', // Path to tenant-specific migrations
                '--force' => true,
            ]);

            // $this->info("Migrate:fresh completed for tenant: {$tenant->id}");
        });
    }
}
