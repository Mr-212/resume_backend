<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PlanResource\Pages;
use App\Filament\Resources\PlanResource\RelationManagers;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Models\Subscriptions\Plan;
use App\Models\Subscriptions\Subscription;
use App\Models\Subscriptions\SubscriptionItem;
use App\Services\StripeService;
use Exception;

class PlanResource extends Resource
{
    protected static ?string $model = Plan::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('product_name'),
                Forms\Components\TextInput::make('price'),
                Forms\Components\TextInput::make('interval'),
                Forms\Components\Select::make('type')
                ->options([
                    Plan::PLAN_TYPE_FIXED => Plan::PLAN_TYPE_FIXED,
                    Plan::PLAN_TYPE_RECURRING => Plan::PLAN_TYPE_RECURRING,
                ]),
                Forms\Components\Select::make('active')
                ->options([
                    1 => 'Active',
                    0 => 'Not active',
                ])

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            // ->query(
            //     Plan::query()->where('active',1)
            // )
            ->columns([
                Tables\Columns\TextColumn::make('product_name'),
                Tables\Columns\TextColumn::make('price'),
                Tables\Columns\TextColumn::make('interval'),
                Tables\Columns\TextColumn::make('type'),
                Tables\Columns\IconColumn::make('active')
                ->boolean(fn($record) => $record->active ?? false)
                ->trueIcon('heroicon-o-check-badge')
                ->falseIcon('heroicon-o-x-mark')
                ,
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make('delete')
                ->action(function($record){

                     (new static)->deleteStripePrice($record);
                }),
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPlans::route('/'),
            'create' => Pages\CreatePlan::route('/create'),
            'edit' => Pages\EditPlan::route('/{record}/edit'),
        ];
    }


    public static function getHeaderActions(): array
    {

    }


    public function deleteStripePrice($price)
    {
        try{
            $is_subscribed = SubscriptionItem::whereStripePrice($price->stripe_price)->exists();

            if(!$is_subscribed)
            {
                $stripeService = new StripeService();
                if($stripeService->delete_price($price->stripe_price))
                {
                    $price->active = 0;
                    $price->save();
                    \Filament\Notifications\Notification::make()
                    ->title('Success')
                    ->body('Price deleted successfully')
                    ->success()
                    ->send();
                }
                return false;

            }else{
                \Filament\Notifications\Notification::make()
                ->title('danger')
                ->body('Price can\'t be deleted its used in subscriptin item')
                ->danger()
                ->send();
            }
        }
        catch(Exception $e)
        {
            \Filament\Notifications\Notification::make()
            ->title('Deletion Failed')
            ->body('An error occurred while attempting to delete the price: ' . $e->getMessage())
            ->danger()
            ->send();
        }
    }
}
