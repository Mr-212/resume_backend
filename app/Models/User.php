<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Traits\UUID;
use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use Billable ,HasApiTokens, HasFactory, Notifiable ,UUID;

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
        'first_name','last_name','phone','is_social','privider','provider_id','img_url','social_email_verified','url','nickname'
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
                'provider' => self::GOOGLE ,
                'provider_id' => $user['id'],
                'name' => $user['name'],
                'first_name' => $user['given_name'],
                'last_name' => $user['family_name'],
                // 'phone' => $user->phone,
                'social_email_verified'=> $user['email_verified'],
                'img_url' => $user['picture']
            ]);
        }catch(Exception $e){
            dd($e->getMessage());
            return ['error' => true, 'errorMsg' => $e->getMessage()];
        }
    }
    public function update_github_user($user){
        // dd($user);
        try{
           return self::updateOrcreate(['provider_id' => $user['id']],
            [
                'is_social' => 1,
                'provider' => self::GITHUB,
                'name' => $user['name'],
                'img_url' => $user['avatar_url'],
                'url' => $user['url'],
                'nickname' => $user['login'],
            ]);
        }catch(Exception $e){
            dd($e->getMessage());
            return ['error' => true, 'errorMsg' => $e->getMessage()];
        }
    }


    public function checkStripePrice($price)
    {
        $subscription = $this->subscriptions->contains(function ($subscription) use ($price){

            return $subscription->stripe_price == $price && $subscription->active();

        });

        return $subscription;
    }
}
