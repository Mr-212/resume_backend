<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\Resume\ResumeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Resume\ProfileContoller;
use App\Http\Controllers\Resume\EducationController;
use App\Http\Controllers\Resume\ExperienceController;
use App\Http\Controllers\Resume\SkillController;
use App\Http\Controllers\Resume\SoftSkillController;
use App\Http\Controllers\Subscriptions\PaymentController;
use App\Http\Controllers\Subscriptions\StripeController;
use App\Http\Controllers\Subscriptions\SubscriptionController;
use App\Http\Controllers\WhoAmIController;
use App\Models\Resume\Experience;

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
    return view('index.index');
    //return view('layouts.app');
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
// Route::resource('resume', ResumeController::class);
//->middleware(['auth']);


Route::resource('aboutMe', WhoAmIController::class);
Route::resource('resume.image', ImageController::class)->middleware('auth');


// Route::prefix('subscriptions')->group(function(){
    Route::resource('subscription', SubscriptionController::class);
    // Route::resource('subscreptions', StripeController::class)->shallow();
    Route::resource('payment_methods', PaymentController::class);

// });


Route::resource('resume', ResumeController::class)->middleware('auth');


Route::prefix('resume')->group(function(){
    //Route::get('/get_menu_list',[ MenuController::class, 'get_menu_list' ]);
    Route::resource('profile',ProfileContoller::class);
    Route::post('profile/{profile_id}/education/save',[EducationController::class,'save']);
    Route::resource('profile.education',EducationController::class)->shallow();
    // ->parameters([
    //     'profile' => 'profile:uuid',
    // ]);;
    Route::resource('profile.skill',SkillController::class)->shallow();
    Route::resource('profile.softskill',SoftSkillController::class)->shallow();

    Route::post('profile/{profile_id}/experience/save',[ExperienceController::class,'save']);
    Route::resource('profile.experience',ExperienceController::class)->shallow();
})->middleware('auth');

