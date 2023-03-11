<?php

namespace App\Models\Resume;

use App\Models\User;
use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;

class Profile extends Model
{
    use HasFactory, UUID;
    protected $table = 'resume_profile';
    
    protected $fillable = [ 'user_id','job_title', 'job_description', 'first_name','last_name', 'email', 'phone', 'phone1', 'dob', 'github_url','linkedin_url','twitter_url',
        'facebook_url', 'google_url','address','address1'
    ];


    public function getFullNameAttribute(){
        return $this->first_name. ' '. $this->last_name;
    }

    public function user(){
        return $this->hasOne(User::class);
    }

    
}
