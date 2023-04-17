
@extends('layouts.app')
@section('content')
        <div class="flex flex-row border border-gray-300 rounded-sm bg-white shadow-lg w-full h-screen">
            <div class="w-2/3">
                <main class="flex flex-col">
                 
                    <header class="flex flex-row border-b-2 bg-black w-full">
                        <div class="flex flex-row space-y-4 w-full p-4">
                            <div class="flex flex-row justify-between w-full">
                                <div class="text-start">
                                    
                                    <div class="text-white" id="title-column">
                                    <ul class="mt-2 mb-2">
                                        <li class="px-2 mt-1">
                                            <h1 class="text-2xl text-blue-400 font-extrabold">{{$profile->name}}</h1>
                                        </li>
                                        <li class="px-2 mt-1">
                                            <h1 class="text-xl font-bold text-slate-200">{{$profile->job_title}}</h1>
                                        </li>
                                        </ul>

                                    </div>
                                    <div class="text-white pt-10" id="icon-column">
                                        <ul class="flex flex-row justify-start pl-2 gap-x-2">
                                                <li>
                                                <a href={{$profile->linkedin_url}}
                                                        class=""
                                                        target="_blank">
                                                <svg
                                                    class="w-6 h-6 text-blue-500 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path
                                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                    ></path>
                                                    </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                <a href={{$profile->twitter_url}}
                                                        class=""
                                                        target="_blank">
                                                    <svg
                                                    class="w-6 h-6 text-blue-300 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                                    />
                                                    </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={{$profile->github_url}}
                                                        class=""
                                                        target="_blank">
                                                        <svg class="w-6 h-6 text-blue-300 fill-current" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 32 447.99999999999994 448" xmlns="http:www.w3.org/2000/svg" width="2500"
                                                            height="2321">
                                                            <g fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
                                                                    fill="currentColor" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="text-start">
                                    <ul class="mt-2 mb-2 text-white">
                                    
                                        <li class="px-2 mt-1"><strong class="mr-1">Phone </strong>
                                            <a href="tel:+821023456789" class="block text-sky-400  opacity-100 font-bold">{{$profile->phone}}</a>
                                        </li>
                                        <li class="px-2 mt-1"><strong class="mr-1">E-mail </strong>
                                            <a href="mailto:" class="block  text-sky-400 font-bold">{{$profile->email}}</a>
                                        </li>
                                        <li class="px-2 mt-1"><strong class="mr-1">Location</strong>
                                        <span class="block  text-sky-400 font-bold">{{$profile->address}}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-right">
                            
                                    
                                </div>
                                
                                
                                
                        
                            </div>
                        </div>
                    @if($profile->image_url)    
                    <div class="flex w-2/6 border-l-2 justify-center items-center">
                        <div class="bg-cover bg-no-repeat  h-52 w-full border"
                                         style="background-image: url({{$profile->image_url}})"
                                >
                        </div>
                    </div> 
                    @endif
                </header>
                    <div class="w-full p-4 bg-gray-200">
                        <section>
                            <h2 class="text-md text-left border-b-2 font-bold">About</h2>
                            <p class="mt-3 text-sm text-left">
                                {{$profile->job_description}}
                            
                                </p>

                        </section>

                        <section>
                            <h2 class="text-left text-md mt-6 border-b font-semibold">Education Details</h2>
                            <ul class="mt-2">
                                @foreach($education as $education)
                               
                                        <li class="pt-1">
                                            <p class="flex justify-between text-md items-center">
                                                <strong class="font-bold text-blue-900 opacity-100">{{$education->qualification}}</strong>
                                                    <small class="font-bold text-blue-400">{{$education->gpa_marks}}</small>
                                            </p>
                                            <p class="flex justify-between text-md items-center">
                                                <span class=" font-bold italic text-gray-600">{{$education->institution}}</span>
                                                <small class="font-bold"> {{$education->start_date . '-'. $education->end_date}}</small>
                                            </p>
                                        </li>
                               @endforeach
                                
                            </ul>
                        </section>

                        <section>
                            <h2 class="text-lg text-left mt-6 pb-1 border-b-2 font-semibold">Work Experience</h2>
                            <ul class="mt-1">
                                @foreach($experience as $experience)
                               
                                 
                                        <li class="py-2">
                                        <div class="flex flex-col justify-between items-start">
                                            <p class="flex flex-row justify-between w-full">
                                                <strong class="pr-4 text-blue-900 opacity-100">{{$experience->job_title}}</strong>
                                                <small class="text-blue-400 font-bold">{{$experience->start_date . ' - ' . $experience->end_date}}</small>
                                            </p>
                                            <p class="flex flex-row justify-between w-full">
                                                <span class="pr-2 text-md font-bold italic text-gray-600">{{$experience->company}}</span>
                                                <small class="font-bold">{{$experience->city . ' ( '. $experience->country .' ) '}}</small>
                                            </p>
                                         
                                        <p class="text-sm text-left">{{$experience->description}}</p>
                                    </li> 
                                    
                            @endforeach
                            </ul>
                        </section>
                        
                    </div>
                </main>
            </div>
            <div class="w-1/3 border-l-2 bg-gray-300 opacity-100 p-1">
             
              {{-- <div class="flex w-2/6 border-l-2 justify-center items-center">
                 <div class="bg-cover bg-no-repeat rounded-full h-52 w-52 border"
                                 // style="background-image: url(../bootstrap/dog.jpg)"
                         >
                             <p class="text-center align-middle">Image</p>
                 </div>
             </div>  --}}
             <div class="jsutify-start items-start w-full px-10">

             <div class="flex flex-col justify-center items-center w-full">
                 <div class="text-left border-b-2 w-full pl-6 gap-x-2">
                     <strong class="text-lg text-black font-bold">Skill Profile</strong>
                 </div>
                 <ul class="flex flex-col justify-start items-start w-full mt-2">
                    @foreach($skills as $skill)
                      
                             <div class="flex flex-col items-start w-full">
                                 <div class="lex flex-row justify-between items-start w-full">
                                     <span class="text-green-500"><i class="fa fa-check" aria-hidden="true"></i></span>
                                     <span class="px-2 font-bold text-md text-gray-500">{{$skill->skill}}</span>
                                 </div>

                                 <div class="flex flex-row justify-between items-center w-full">
                                    <input class="w-full h-1 bg-green-400 rounded-sm cursor-pointer dark:bg-gray-700"  type="range" min="0" max="100" step="10" value={{$skill->score}} />
                                    <span class="block h-8 w-12 font-bold text-black">{{$skill->score}}</span> 

                                </div>
                             </div>
                             @endforeach

                 </ul>
             </div>
        

         </div>
        
     </div>
        
         </div>

@endsection
