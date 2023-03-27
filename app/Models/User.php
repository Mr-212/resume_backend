<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Traits\UUID;
use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, UUID;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */


    const GOOGLE = "google";
    const GITHUB = "github";

    protected $fillable = [
        'name',
        'email',
        'password',
        'first_name','last_name','phone','is_social','social_plateform','social_profile_img_link','social_email_verified'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function update_google_user($user){
        // dd($user);
        try{
           return self::updateOrcreate(['email' => $user['email']],
            [
                'is_social' => 1,
                'social_plateform' => self::GOOGLE ,
                'name' => $user['name'],
                'first_name' => $user['given_name'],
                'last_name' => $user['family_name'],
                // 'phone' => $user->phone,
                'social_email_verified'=> $user['email_verified'],
                'social_profile_img_link' => $user['picture']
            ]);
        }catch(Exception $e){
            // dd($e->getMessage());
            return ['error' => true, 'errorMsg' => $e->getMessage()];
        }
    }
}
