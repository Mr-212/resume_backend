<?php

namespace App\Http\Controllers\Resume;

use App\Constants\SkillConstants;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Resume\Skill;
use Exception;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    private $model;
    public function __construct(Skill $skill)
    {
        $this->model = $skill;
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($profile_id = null)
    {
        // dd($profile_id);
        try{
            $skills = SkillConstants::List;
            $list = Skill::whereProfileId($profile_id)->get()->toArray();
            foreach($list as $k=>$v){
                // dd($v);
                $list[$v['skill']] = $v;
                unset($list[$k]);
            }
            // dd($list);
            return response()->json(['skillsList' => $skills, 'skills' => $list]);

        }catch(Exception $e){
            return response()->json($e->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSkillRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            // dd($request->all());

            foreach(($request->all()) as $k => $value){
                $id = array_key_exists('id',$value)?$value['id'] : "";

                if($skill = Skill::updateOrCreate(['id' => $id], $value)){
                    $updatedSkills[$k] = $skill;
                }
             }
        return response()->json($updatedSkills);

        }catch(Exception $e){
            return response()->json($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Profile\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function edit(Skill $skill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSkillRequest  $request
     * @param  \App\Models\Profile\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        //
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // dd($id);
        try{
            if($this->model->whereSkill($id)->delete()){
                return response()->json(['status' => 200]);
            }
         } catch( Exception $e){
            return response()->json(['status' => $e->getMessage()]);
         }

    }
}
