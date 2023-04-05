<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\SocialAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::prefix('auth')->group(function(){

//     Route::post('login', []);
//     Route::post('register', []);
// });

Route::prefix('social')->group(function(){
    // dd('hre');

    Route::get('/{driver?}', [SocialAuthController::class, 'getClientDriver']);
    // Route::get('callback', [SocialAuthController::class, 'callback']);
    // Route::post('register', []);
});
Route::get('{provider}/callback', [SocialAuthController::class, 'callback']);
Route::get('logout', [AuthController::class, 'logout']);


