<?php

namespace App\Models\Resume;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoftSkill extends Model
{
    use HasFactory;

    protected $table= 'resume_soft_skill';
    protected $fillables = ['profile_id','type','key','value','created_by','updated_by'];


    public function profile(){
        return $this->hasOne(Profile::class);
    }
}
