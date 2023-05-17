<?php

namespace App\Models\Resume;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoftSkill extends Model
{
    use HasFactory, UUID;

    protected $table= 'resume_misc';
    protected $fillable = [ 'profile_id','type','key','value','created_by','updated_by'];


    public function profile(){
        return $this->hasOne(Profile::class);
    }
}
