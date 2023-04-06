<html>

    <!-- head -->
    <head>
        @include('layouts.partials.head')
        @vite('resources/css/app.css')
        @vite('resources/js/app.tsx')
        @vite('resources/js/app.js');
        @viteReactRefresh
    </head>
   
   
 
    <!-- body -->
    <!-- <body class="container-fluid bg-slate-100 w-full h-screen [&::-webkit-scrollbar]:hidden overflow-y-auto"> -->
    <body class="">

        <div class="container bg-slate-100 [&::-webkit-scrollbar]:hidden">
            @include('resume.header')
            <div class="mt-4">
                @yield('content')
                {{-- <div id="app" class="flex text-center h-screen max-h-screen w-full pt-6" data-profile-id="{{ $resume_id }}"></div> --}}
            </div>
        </div>
       
      

    </body>


    <!-- footer -->
    <footer>
        @include('layouts.partials.footer')
    </footer>


</html>