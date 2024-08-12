<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;


class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        // dd($data);
        $record->update($data);

        return $record;

    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        // Modify the data before it gets saved
        // dd($data);
        // $data['status'] = 'updated';

        return $data;
    }
}
