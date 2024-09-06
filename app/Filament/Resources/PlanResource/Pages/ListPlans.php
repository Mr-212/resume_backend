<?php

namespace App\Filament\Resources\PlanResource\Pages;

use App\Filament\Resources\PlanResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Services\Stripe\StripeService;

class ListPlans extends ListRecords
{
    protected static string $resource = PlanResource::class;
    // protected $stripeService =  new StripeService();

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\Action::make('refresh_stripe_plans')
            ->label('Refresh')
            ->color('info')
            ->button()
            ->action(fn() => $this->getPlans()),
        ];
    }


    protected function getPlans()
    {
        $stripeService =  (new StripeService())->plan();
        $stripeService->all();
    }


}
