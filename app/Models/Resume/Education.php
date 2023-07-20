<?php

namespace App\Models\Resume;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory, UUID;

    protected $table = 'resume_education';
    
    protected $fillable = ['id', 'profile_id', 'institution', 'qualification', 'gpa_marks','start_date', 'end_date', 'address', 'description', 'created_by', 'updated_by', 
    ];



    // public function user(){
    //     return $this->hasOneThrough();
    // }
}
