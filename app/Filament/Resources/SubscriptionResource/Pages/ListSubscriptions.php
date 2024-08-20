<?php

namespace App\Filament\Resources\SubscriptionResource\Pages;

use App\Filament\Resources\SubscriptionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Actions\Action;


class ListSubscriptions extends ListRecords
{
    protected static string $resource = SubscriptionResource::class;
    // protected static ?string $title = 'Custom Page Title';
    protected static ?string $navigationLabel = 'Custom Navigation Label';
    protected ?string $subheading = 'Custom Page Subheading';

    protected function getHeaderActions(): array
    {
        return [
            // Actions\CreateAction::make(),
        ];
    }


    protected function getTableColumns(): array
    {
        dd('here');
        return [

        ];
    }


    protected function getTableActions(): array
    {
        dd('here');
        // return parent::getTableActions();
        return [
            Tables\Actions\EditAction::make(),

            // Action::make('View Customer')->url(fn($record) => route('filament.admin.resources.users.edit', [ 'record' => $record->user_id])),

            Action::make('cancel_plan')->label('Cancel')
            ->color('danger')
            ->action(fn($record) => $record)
            ->requiresConfirmation(),
        ];
    }
}
