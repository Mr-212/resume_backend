<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Inertia::render('Auth/Login');
    return view('layouts.app');
});
Route::get('/login', function () {
    // dd('here');
    return Inertia::render('Auth/Login');
    // return view('layouts.app');
});
Route::get('/register', function () {
    return Inertia::render('Auth/Register');

});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');

});

Route::get('/input', function () {
    return Inertia::render('Build/input');

});
