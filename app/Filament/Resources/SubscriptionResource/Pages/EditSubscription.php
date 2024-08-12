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
        // dd('here');
        return  array_merge(parent::getFormActions(),[
            Actions\Action::make('cancel_subscription')
                ->label('Cancel Subscription')
                ->color('danger')
                ->icon('heroicon-o-x-circle')
                ->requiresConfirmation()
                ->action(fn ($record) => static::cancelSubscription($record)),
        ]);
    }

    protected static function cancelSubscription($record)
    {
        $user = $record?->user;

        if (!$user && $user->subscribedToPrice($record->stripe_price, $record->name)) {
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
