<?php

namespace Database\Seeders;

use App\Models\Resume;
use App\Models\Resume\Education;
use App\Models\Resume\Experience;
use App\Models\Resume\Profile;
use App\Models\Resume\Skill;
use App\Models\Resume\SoftSkill;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ResumeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // dd(User::all());
        $user = User::whereEmail('raza.ar10@gmail.com')->first('id');
        $profile = Profile::updateOrCreate(['email' => 'raza_997@hotmail.com'],[
            'id' => Str::uuid(),
            'title' => 'Ali Raza',
            'user_id' => $user->id,
            'job_title' => 'Full Stack developer (Laravel/React)',
            'email' => 'raza_997@hotmail.com',
            'name' => 'Ali Raza',
            'phone' => '00923448796096',
            'linkedIn_url' => 'https://www.linkedin.com/in/ali-raza-0b6ab241/',
            'github_url'  => 'https://github.com/mr-212',
            'address' => 'Lahore, Pakistan',
            'dob' => Carbon::parse('28-12-1989'),
            
            'job_description' => 'Hi, I am full stack developer specialized in Larave with backend and ReactJs as frontend framework, with heavy backend development. 
             I have around 5 years of development experience. I can offer my services in domain range of app development, new feature development, bug fixing, API integrations
             third party, REST API development, database archtecture, payment gateway integration etc.',

        ]);
        // dd($profile);

        Education::updateOrCreate([
            'profile_id' => $profile->id,
            'qualification' => 'Diploma in Electronics & Telecommunication',
        ],[
            'id' => Str::uuid(),
            'institution' => 'Middle East College of IT, Muscat (Oman)',
            'gpa_marks' => '3.54',
            'start_date' => 2011,
            'end_date'   => 2013,
         ]);

         Education::updateOrCreate([
            'profile_id' => $profile->id,
            'qualification' => 'BSCS',
        ],[
            'id' => Str::uuid(),
            'institution' => 'University of Management and Technology, Lahore (Pakistan)',
            'gpa_marks' => '3.36',
            'start_date' => 2014,
            'end_date'   => 2018,
        ]);

       

        Experience::updateOrCreate(['profile_id' => $profile->id, 'company'=> 'Aksile Media'],
        [
            'id' => Str::uuid(),
            'job_title' =>'Laravel Developer',
            'is_currently_working' => 0,
            'start_date' => '2016',
            'end_date' => '2016',
            'city' => 'Lahore',
            'country' =>'Pakistan',
            'description' => '',

        ]);

        Experience::updateOrCreate(['profile_id' => $profile->id,'company'=> 'Pantera Engineering'],
        [
            'id' => Str::uuid(),
            'profile_id' => $profile->id,
            'job_title' =>'Laravel Developer',
            'start_date' => '2017',
            'end_date' => '2018',
            'city' => 'Lahore',
            'country' =>'Pakistan',
            'description' => '',

        ]);

        Experience::updateOrCreate(['profile_id' => $profile->id,'company'=>'Programmers Force'],
        [
            'id' => Str::uuid(),
            'job_title' =>'Laravel Developer',
            'profile_id' => $profile->id,
            'start_date' => '2019',
            'end_date' => '2020',
            'city' => 'Lahore',
            'country'=> 'Pakistan',
            'description' => '',

        ]);

        Experience::updateOrCreate(['profile_id' => $profile->id,'company' => 'Techloyce'],
        [
            'id' => Str::uuid(),
            'job_title' =>'Laravel Developer',
            'profile_id' => $profile->id,
            'start_date' => '2020',
            'end_date' => '2021',
            'city' => 'Lahore',
            'country'=> 'Pakistan',
            'description' => '',

        ]);

        Experience::updateOrCreate(['profile_id' => $profile->id,'company' => 'Aksile Media', 'start_date' => '2021'],
        [
            'id' => Str::uuid(),
            'job_title' =>'Laravel Developer',
            'profile_id' => $profile->id,
            'start_date' => '2021',
            'end_date' => '2023',
            'city' => 'Lahore',
            'country'=> 'Pakistan',
            'description' => '',

        ]);

        SoftSkill::updateOrCreate(['profile_id' => $profile->id,'key' => 'Analytical Abilities'],
        [
            'id' => Str::uuid(),
            'profile_id' => $profile->id,
            'value' => ''

        ]);
        SoftSkill::updateOrCreate(['profile_id' => $profile->id,'key' => 'Reasoning'],
        [
            'id' => Str::uuid(),
            'profile_id' => $profile->id,
            'value' => ''

        ]);
        SoftSkill::updateOrCreate(['profile_id' => $profile->id,'key' => 'Interapersonel'],
        [
            'id' => Str::uuid(),
            'profile_id' => $profile->id,
            'value' => ''

        ]);
        SoftSkill::updateOrCreate(['profile_id' => $profile->id,'key' => 'Hardworking'],
        [
            'id' => Str::uuid(),
            'profile_id' => $profile->id,
            'value' => ''

        ]);
        SoftSkill::updateOrCreate(['profile_id' => $profile->id,'key' => 'Research'],
        [
            'id' => Str::uuid(),
            'profile_id' => $profile->id,
            'value' => ''

        ]);
        SoftSkill::updateOrCreate(['profile_id' => $profile->id,'key' => 'Committed'],
        [
            'id' => Str::uuid(),
            'profile_id' => $profile->id,
            'value' => ''

        ]);

        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'Laravel'],
        [
            'id' => Str::uuid(),
            'skill' => 'Laravel',
            'score' => 90,
            'profile_id' => $profile->id,
        ]);
        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'Livewire'],
        [
            'id' => Str::uuid(),
            'score' => 80,
            'profile_id' => $profile->id,
        ]);

        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'ReactJS'],
        [
            'id' => Str::uuid(),
            'score' => 80,
            'profile_id' => $profile->id,
        ]);

        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'Codeignitor'],
        [
            'id' => Str::uuid(),
            'score' => 70,
            'profile_id' => $profile->id,
        ]);

        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'Javascript'],
        [
            'id' => Str::uuid(),
            'score' => 80,
            'profile_id' => $profile->id,
        ]);

        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'MySQL'],
        [
            'id' => Str::uuid(),
            'score' => 80,
            'profile_id' => $profile->id,
        ]);

        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'Docker'],
        [
            'id' => Str::uuid(),
            'score' => 80,
            'profile_id' => $profile->id,
        ]);

        Skill::updateOrCreate(['profile_id' => $profile->id,'skill' => 'Docker Compose'],
        [
            'id' => Str::uuid(),
            'score' => 80,
            'profile_id' => $profile->id,
        ]);





    }
}
