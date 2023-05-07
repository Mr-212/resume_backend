<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Models\Resume\SoftSkill;
use Exception;
use Illuminate\Http\Request;

class SoftSkillController extends Controller
{


    const SOFT_SKILL = 'SOFT_SKILL';



    private $softSkillModel ;

    public function __construct(SoftSkill $model)
    {
        $this->softSkillModel = $model;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($profile_id = null)
    {
        try{
            $list = $this->softSkillModel::whereProfileId($profile_id)->whereType(self::SOFT_SKILL)->get()->toArray();

          
            return response()->json([ 'status_code' => 200,  'softskills' => $list]);

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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        try{
            foreach(($request->all()) as $k => $value){
                $id = array_key_exists('id',$value)?$value['id'] : "";

                if($skill = $this->softSkillModel::updateOrCreate(['id' => $id, 'type'=> self::SOFT_SKILL], $value)){
                    $updatedSkills[] = $skill;
                }
            }
            return response()->json(['status_code'=> 200 , 'softSkillData' => $updatedSkills]);

         }catch(Exception $e){
            return response()->json($e->getMessage());
         }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // dd($id);
        {
            try{
                if($this->softSkillModel::find($id)->delete()){
                    return response()->json(['status_code' => 200,'message' => 'Record deleted.']);
                }
             } catch( Exception $e){
                return response()->json(['status' => $e->getMessage()]);
             }
    
        }
    }
}
