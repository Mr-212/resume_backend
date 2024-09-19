<html>

    <!-- head -->
    <head>
        @include('layouts.partials.head')
        @vite('resources/css/app.css')
        @vite('resources/js/app.tsx')
        {{-- @vite('resources/js/app.js'); --}}
        {{-- @viteReactRefresh --}}
    </head>



    <!-- body -->
    <body class="h-screen max-h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        <div class="container stick-top">
            @include('resume.header')
            <div class="mt-2">
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
