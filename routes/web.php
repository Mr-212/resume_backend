<?php

use App\Http\Controllers\Resume\ResumeController;
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

// Route::prefix('resume')->group(function(){

//     // Route::get('/', function () {
//     //     return view('resume.app');

//     // });
//     // Route::get('/', [ResumeController::class,'index']);
//     Route::resource('/', ResumeController::class);

//     // Route::get('/profile', function () {
//     //     return Inertia::render('Build/Profile');
    
//     // });
//     // Route::get('/education', function () {
//     //     return Inertia::render('Build/Education');
    
//     // });
    
// });
Route::resource('resume', ResumeController::class);
//->middleware(['auth']);

Route::get('/login', function () {
    // dd('here');
    return Inertia::render('Auth/Login');
    // return view('layouts.app');
});
Route::get('/register', function () {
    return Inertia::render('Auth/Register');

});



