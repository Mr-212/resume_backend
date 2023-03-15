<?php

namespace App\Models\Resume;

use App\Models\Resume\Profile;
use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory, UUID;

    protected $table = "profile_skills";

    protected $fillable = ['profile_id', 'skill_id' ,'skill', 'score','created_by','updated_by'];

    public function profile(){
        return $this->hasOne(Profile::class);
    }
}
