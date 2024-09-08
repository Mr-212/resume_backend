<?php

namespace App\Filament\Resources;

use App\Filament\Resources\InvoiceResource\Pages;
use App\Filament\Resources\InvoiceResource\RelationManagers;
// use App\Models\Invoice;
use App\Services\Stripe\StripeService;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Models\Subscriptions\Invoice;
class InvoiceResource extends Resource
{
    protected static ?string $model = Invoice::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns(
                static::getTableColumns(),
            )
            ->filters([
                //
            ])
            ->actions([
                //Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    //Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListInvoices::route('/'),
            'create' => Pages\CreateInvoice::route('/create'),
            'edit' => Pages\EditInvoice::route('/{record}/edit'),
        ];
    }


    public static function getTableQuery()
    {
        // $invoices = static::fetchInvoices();
        // dd($invoices);
    }


    public static function getTableColumns() : array
    {
        return
        [
        Tables\Columns\TextColumn::make('id')
            ->label('Invoice ID'),

        Tables\Columns\TextColumn::make('amount_due')
            ->label('Amount'),

        Tables\Columns\TextColumn::make('amount_paid')
            ->label('Status'),

        Tables\Columns\TextColumn::make('billing_reason')
            ->label('Billing Reason'),

        Tables\Columns\TextColumn::make('subtotal')
            ->label('Sub Total'),

        Tables\Columns\TextColumn::make('total_discount_amount')
            ->label('DIscount'),

        Tables\Columns\TextColumn::make('total_excluding_tax')
            ->label('Total Exporting Tax'),

        Tables\Columns\TextColumn::make('total_tax_amounts')
            ->label('Tax'),

        ];
    }


    public static function fetchInvoices(): array
    {
        $stripeInvoiceService = (new StripeService())->invoice();
        dd($stripeInvoiceService->all());
    }
}
