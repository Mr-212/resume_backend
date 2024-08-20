<?php

namespace App\Filament\Resources\SubscriptionResource\Pages;

use App\Filament\Resources\SubscriptionResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditSubscription extends EditRecord
{
    protected static string $resource = SubscriptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }


    protected function getFormActions(): array
    {
        return  array_merge(parent::getFormActions(),[
            Actions\Action::make('cancel_subscription')
                ->label('Cancel Subscription')
                ->color('danger')
                ->icon('heroicon-o-x-circle')
                ->requiresConfirmation()
                ->action(fn ($record) => static::cancelSubscription($record))
                ->visible(fn ($record) => $record->subscription_active)
                ,
        ]);
    }

    protected static function cancelSubscription($record)
    {
        $user = $record?->user;
        // dd(is_null($user));

        if (!is_null($user) && $user->subscribedToPrice($record->stripe_price, $record->type)) {

            $canceled = $record->cancelNow();
            // dd($canceled);
            Notification::make()
            ->title('Subscription successfully cancelled.')
            ->success()
            ->send();
        } else {
            Notification::make()
            ->title('Error in cancelleing Subscription.')
            ->danger()
            ->send();


        }

        return redirect()->back();
    }
}
