<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Models\Resume\Profile;
use Exception;
use Illuminate\Http\Request;

class ProfileContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id =null)
    {
        try{
            $profile = Profile::find($id);
            return dd($profile,$id);
            exit;
            return response()->json(['STATUS_CODE'=>200,'profile'=>$$profile, 'message' => 'Profile Retrived.']);


        }catch(Exception $e){
            return response()->json(['STATUS_CODE' => 404, 'message' => $e->getMessage()]);

        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            // dd($request->all());
            
            $request->request->add(['user_id' => Profile::generateUUID()]);
        if($profile = Profile::updateOrCreate(['id' => $request->id],$request->all())){
            return response()->json($profile);
            return response()->json(['STATUS_CODE'=>200,$profile, 'message' => 'Profile saved.']);

        }
        }catch(Exception $e){

            return response()->json(['STATUS_CODE' => 404, 'message' => $e->getMessage()]);
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
        try{
            $profile = Profile::find($id);
            //  dd($profile,$id);
            // exit;
            return response()->json(['STATUS_CODE'=>200,'profile'=>$profile, 'message' => 'Profile Retrived.']);


        }catch(Exception $e){
            return response()->json(['STATUS_CODE' => 404, 'message' => $e->getMessage()]);

        }
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
        //
    }
}
