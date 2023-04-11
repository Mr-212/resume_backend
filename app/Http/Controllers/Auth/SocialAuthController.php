<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Session;

use function PHPUnit\Framework\throwException;

class SocialAuthController extends Controller
{
    private $model;
    private $userModel;


    public function __construct(User $user)
    {
        $this->userModel = $user;
    }

    public function getClientDriver($driver){
        
        $client = Socialite::driver($driver)->redirect();
        // session('driver', $driver);
        return $client;

    }


    public function callback($provider){
        try{

            if($provider){
                $user = Socialite::driver($provider)->user();
                $method = 'update_'.$provider.'_user';
                $user = $this->userModel->$method($user->user);
                if($user?->id){
                    Auth::login($user, true);
                    // dd(auth()->user());
                    return redirect('resume');
                }
                // dd($request->all(), $user);
            }

    }catch(Exception $e){
        // throw new Exc($e->getMessage());
        $e->getMessage();
    }

    }



}
