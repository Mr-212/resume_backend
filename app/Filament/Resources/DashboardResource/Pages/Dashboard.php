<?php

namespace App\Filament\Resources\DashboardResource\Pages;

// use App\Filament\Resources\DashboardResource;

use Filament\Resources\Pages\Page;
use Filament\Pages\Dashboard as BaseDashboard;
use Filament\Widgets;
use Filament\Facades\Filament;


class Dashboard extends BaseDashboard
{
    // protected static string $resource = DashboardResource::class;

    // protected static string $view = 'filament.resources.dashboard-resource.pages.dashboard';


    public function getWidgets(): array
    {
        // return Filament::getWidgets();
        return [
            Widgets\AccountWidget::class,
        ];
    }
}
