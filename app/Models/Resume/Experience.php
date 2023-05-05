<?php

namespace App\Models\Resume;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory, UUID;


    protected $table = 'profile_experiences';
    protected $fillable = ['profile_id' ,'job_title','company','start_date','end_date','is_currently_working','city','country','description','created_by','updated_by'];


    public function profile(){
        return $this->belongsTo(Profile::class);
    }
}
