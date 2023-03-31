<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\MenuController;
use App\Http\Controllers\Resume\ProfileContoller;
use App\Http\Controllers\Resume\EducationController;
use App\Http\Controllers\Resume\ExperienceController;
use App\Http\Controllers\Resume\SkillController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/resume')->group(function(){
    //Route::get('/get_menu_list',[ MenuController::class, 'get_menu_list' ]);
    Route::resource('profile',ProfileContoller::class);
    Route::resource('profile.education',EducationController::class)->shallow();
    // ->parameters([
    //     'profile' => 'profile:uuid',
    // ]);;
    Route::resource('profile.skill',SkillController::class)->shallow();
    Route::resource('profile.experience',ExperienceController::class)->shallow();
});


