<html>

<script ></script>
    
    <!-- head -->
    <head>
        @include('layouts.partials.head')
        @vite('resources/css/app.css')
        {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script> --}}

        {{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"> --}}
        @vite('resources/js/app.tsx')
        @vite('resources/js/app.js')
        @viteReactRefresh

        {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> --}}
        {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script> --}}
    
    </head>
   
   
 
    <!-- body -->
    <!-- <body class="container-fluid bg-slate-100 w-full h-screen [&::-webkit-scrollbar]:hidden overflow-y-auto"> -->
    <body class="">
       
        <div class="container bg-slate-100 [&::-webkit-scrollbar]:hidden">
            @include('resume.header')
            <div class="mt-4 ">
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