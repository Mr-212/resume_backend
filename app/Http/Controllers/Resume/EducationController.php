<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationRequest;
use App\Http\Requests\UpdateEducationRequest;
use App\Models\Resume\Education;
use Exception;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $model;

    public function __construct(Education $education)
    {
        $this->model = $education;
    } 
    public function index($profile_id)
    {
        try{
            $educationList = $this->model::whereProfileId($profile_id)->orderBy('sort','asc')->get();
            return response()->json($educationList);

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
     * @param  \App\Http\Requests\StoreEducationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        try{
            if($education = $this->model::updateOrCreate(['id' => $request->id], $request->all())){
                return response()->json($education);
            }

        }catch(Exception $e){
            return response()->json($e->getMessage()());
        }
        
    }


    public function save(Request $request)
    {

        // dd($request->all());
        
        try{
            foreach($request->all() as $k => $v){
                $v['sort'] = $k+1;
                if($education = $this->model::updateOrCreate(['id' => $v['id']], $v)){
                    // return response()->json($education);
                }
            }
            return response()->json(['status' => 200,'message' => 'Records updated successfully.']);

        }catch(Exception $e){
            return response()->json($e->getMessage()());
        }
        
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resume\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function show(Education $education,$id)
    {
        dd($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Resume\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function edit(Education $education)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEducationRequest  $request
     * @param  \App\Models\Resume\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEducationRequest $request, Education $education)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resume\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function destroy($education)
    {
        try{
            if($education && $this->model::find($education)->delete());
                return response()->json(['status' => 200]);

        }catch(Exception $e){
            return response()->json(['error' => $e->getMessage()]);
        }
    }
}
