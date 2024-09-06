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

class InvoiceResource extends Resource
{
    // protected static ?string $model = Invoice::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns(
                static::getTableColumns(),
            );
            // ->filters([
            //     //
            // ])
            // ->actions([
            //     Tables\Actions\EditAction::make(),
            // ])
            // ->bulkActions([
            //     Tables\Actions\BulkActionGroup::make([
            //         Tables\Actions\DeleteBulkAction::make(),
            //     ]),
            // ]);
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
        $invoices = static::fetchInvoices();
        dd($invoices);
    }


    public static function getTableColumns() : array
    {
        return
        [
            Tables\Columns\TextColumn::make('invoice_id')
            ->label('Invoice ID'),

        Tables\Columns\TextColumn::make('amount')
            ->label('Amount'),

        Tables\Columns\TextColumn::make('status')
            ->label('Status'),

        Tables\Columns\TextColumn::make('date')
            ->label('Date')
            ->date(),
        ];
    }


    public static function fetchInvoices(): array
    {
        $stripeInvoiceService = (new StripeService())->invoice();
        dd($stripeInvoiceService->all());
    }
}
