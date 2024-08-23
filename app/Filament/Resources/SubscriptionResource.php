<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubscriptionResource\Pages;
use App\Filament\Resources\SubscriptionResource\RelationManagers;
use App\Filament\Resources\SubscriptionResource\RelationManagers\UserRelationManager;
use App\Models\Subscriptions\Plan;
use App\Models\Subscriptions\Subscription;
use Filament\Actions\ViewAction;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Actions\Action;
use Filament\Forms\Components\FormAction;


class SubscriptionResource extends Resource
{
    protected static ?string $model = Subscription::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Subscriptions Resources';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('type')->readOnly(),
                Forms\Components\TextInput::make('stripe_status')
                ->label('Status'),

                // Forms\Components\TextInput::make('cancel_subscription')
                // ->label('Cancel Subscription')
                // // ->color('danger')
                // // ->icon('heroicon-o-x-circle')
                // ->extraAttributes(['type' => 'button'])
                // // ->requiresConfirmation()
                // // ->action('cancelSubscription')
                // ,

            ]);
    }



    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('type'),

                // Tables\Columns\TextColumn::make('user.name')
                // ->label('Customer')
                // // ->url(fn($record) : string => route('filament.admin.resources.users.edit', [ 'record' => $record->user_id])),
                // ->url(fn($record) : string => UserResource::getUrl('edit', [ 'record' => $record->user_id])),

                Tables\Columns\TextColumn::make('user.name')
                ->label('Customer')
                ->action(function ($record, $livewire){
                    return Action::make('viewUser')
                    ->label('view user')
                    ->icon('heroicon-o-eye')
                    ->modalHeading('User Details')
                    ->form([
                        Forms\Components\TextInput::make('name')
                        ->label('Name')
                        ->default($record->user->name)
                        ->disabled(),

                        Forms\Components\TextInput::make('email')
                        ->label('Email')
                        ->default($record->user->email)
                        ->disabled(),

                    ])
                    ->action( fn() => $livewire->notify('User details viewd'));
                }),


                Tables\Columns\TextColumn::make('stripe_price'),
                Tables\Columns\TextColumn::make('stripe_status')
                ->label('Status'),

                // ->formatStateUsing(fn($status) => ),
                // Tables\Columns\TextColumn::make('stripe_price')
                // ->label('Plan')
                // ->formatStateUsing(function($record){
                //     $plan = Plan::where('stripe_id', $record->stripe_price)->first();
                //     return $plan ? "{$plan->title} - $ {$plan->price}/{$plan->interval}" : null;
                // }),

                Tables\Columns\TextColumn::make('plan.plan_name')
                ->label('Plan'),


            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),


                // Action::make('View Customer')->url(fn($record) => route('filament.admin.resources.users.edit', [ 'record' => $record->user_id])),

                Action::make('cancel_plan')->label('Cancel')
                ->color('danger')
                ->action(fn($record) => $record)
                ->requiresConfirmation(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            UserRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSubscriptions::route('/'),
            'create' => Pages\CreateSubscription::route('/create'),
            'edit' => Pages\EditSubscription::route('/{record}/edit'),
        ];
    }


    public static function canCreate(): bool
    {
        return false;
    }
}
