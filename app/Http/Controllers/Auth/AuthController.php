<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Error;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    //



    public function getLogin() {
            return view('auth._login');
    }

    public function getRegister() {
        return view('auth._register');
    }


    public function login(Request $request) {

        // dd($request->all());
        try{
            // dd('here');
            if(Auth::attempt($request->except('_token'))){
                return redirect('resume');
            }
            dd('filed');

        }catch(Exception $e){
            // dd("error");
            throw new Error($e->getMessage());
        }

    }


    public function register(Request $request) {

        //  dd($request->all());
        try{

            $validate = $request->validate([
                'name' => 'string|required',
                'email' => 'required|email|unique:users',
                'password'=>'required|confirmed|min:4',
                // 'password_confirmation' => 'confirmed'
            ]);

            // dd($validate);
            $request->request->add(['password' => Hash::make($request->password)]);
            if($user = User::create($request->except('_token'))){
                return response('User added successfully.', 200);
            }

        }catch(Exception $e){
            // dd($e->getMessage());
            // return new ($e->getMessage());
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
