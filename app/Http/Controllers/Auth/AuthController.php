<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //



    public function login(): void {

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
