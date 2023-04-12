<?php

namespace App\Http\Controllers;

use App\Models\Resume\Profile;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;


class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request, $id)
    {
        // dd($request->url(),$id);
        try{
            if($request->has('file') && !empty($request->get('file'))){
                foreach(json_decode($request->get('file')) as $v){
                    $image = $v->data_url;
                    $extension = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];   // .jpg .png .pdf
                    $replace = substr($image, 0, strpos($image, ',')+1);                    
                    $image = str_replace($replace, '', $image);                     
                    $image = str_replace(' ', '+', $image); 
                    $imageName = Str::random(10).'.'.$extension;
                    $path = storage_path(). '/app/public/images/resume/'.$imageName;
                    $image_url = url('storage/images/resume/'.$imageName);
                    $file = File::put($path, base64_decode($image));
                    $profile =  Profile::find($id);
                    $profile->image_url = $image_url;
                    $profile->save();
                //    ->update(['image_url' => $image_url]);
                //    dd($update);
                  

                    return response()->json(['status_code' => 200, 'message' => 'Image saved. ', 'profile'=> $profile]);
                }


            }

        }catch(Exception $e){
            return response()->json(['status_code' => 400 , 'message' => $e->getMessage()]);
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
        //
    }
}
