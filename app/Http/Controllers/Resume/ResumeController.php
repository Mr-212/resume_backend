<?php

namespace App\Http\Controllers\Resume;

use App\Http\Requests\StoreResumeRequest;
use App\Http\Requests\UpdateResumeRequest;
use App\Models\Resume;
use App\Http\Controllers\Controller;
use App\Models\Resume\Profile;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $resumeModel;

    public function __construct(Profile $profile)
    {   
        $this->resumeModel = $profile;
    }

    public function index()
    {
        // dd('here');
        try{
            if(request()->ajax()){
                $resumes  = $this->resumeModel->where('user_id',auth()->id())->get()->toArray();
                ///dd($resumes);
                return response()->json(['status_code' => 200, 'resumes' => $resumes]);
            }
            return view('resume.index');
        }catch(Exception $e){

            return $e->getMessage();
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $title = $request->title;
        // $user = Str::uuid();
        $user_id = auth()->user()->id;
        $resume = $this->resumeModel->create(['title'=>$title,'user_id' => $user_id]);
        return redirect('/resume/'.$resume->id);
        // dd($resume);
        // return 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreResumeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreResumeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $resume_id = $id;
        // dd($id);
        // $resume_id = $this->resumeModel::find($id);
        // return view('resume.app',['resume_id' => $resume_id]);
        return view('resume.new',['resume_id' => $resume_id]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function edit(Resume $resume)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateResumeRequest  $request
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try{
            // dd($request->all());
            $resume = $this->resumeModel->find($request->id);
            $resume->update($request->except('id'));
            if($resume){
                $resume->refresh();
                return response()->json(['status_code' => 200, 'resume' => $resume]);
            }

        }catch(Exception $e){
            return response()->json(['status_code' => 400, 'error' => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resume  $resume
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // dd($id);
        try{
            if($this->resumeModel::find($id)->delete()){
                return response()->json(['status_code' => 200, 'message' => 'Resume deleted.']);
            }

        }catch(Exception $e){

            return response()->json(['status_code' => 400, 'message' => $e->getMessage()]);
            // throw $e->getMessage();
        }
    }
}
