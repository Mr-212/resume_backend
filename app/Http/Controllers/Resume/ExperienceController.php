<?php

namespace App\Http\Controllers\Resume;
use App\Http\Controllers\Controller;

use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Models\Resume\Experience;
use Exception;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $model;

     public function __construct(Experience $experience)
     {
        $this->model = $experience;
     }



    public function index($profile_id = null)
    {
        
        try{
            if($profile_id){
                $experiences = $this->model::whereProfileId($profile_id)->get();
                return response()->json(['status' => 200, 'experiences' => $experiences]);
            }

        }catch(Exception $e){
            return response()->json(['error' => $e->getMessage()]);
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
     * @param  \App\Http\Requests\StoreExperienceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            // dd($request->all());
            if($experience = $this->model::updateOrCreate(['id' => $request->id], $request->all())){
                return response()->json(['status' =>  200, 'experience' => $experience]);

            }

        }catch(Exception $e){
            return response()->json(['status' =>  401, 'error' => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resume\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function show(Experience $experience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Resume\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function edit(Experience $experience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateExperienceRequest  $request
     * @param  \App\Models\Resume\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExperienceRequest $request, Experience $experience)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resume\Experience  $experience
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            if($id && $this->model::find($id)->delete() ){
                return response()->json(['status' => 200 , 'message' => 'Record deleted.' ]);
            }

        }catch(Exception $e){
            return response()->json(['status' => 402, 'error' => $e->getMessage()]);
        }
        
    }
}
