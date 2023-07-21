<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Error;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //



    public function login(Request $request) {

        // dd($request->all());
        try{

            if(Auth::attempt($request->except('_token'))){
                return redirect('resume');
            }

        }catch(Exception $e){
            throw new Error($e->getMessage());
        }

    }


    public function logout() {
        try{
            auth()->logout();
            return redirect('/');
        }catch(Exception $e){
            throw $e->getMessage();
        }
    }
}
