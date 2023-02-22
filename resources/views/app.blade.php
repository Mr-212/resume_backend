<html>
    
    <!-- head -->
    <head>
        @include('layouts.partials.head')
        <!-- @viteReactRefresh -->
        @vite('resources/css/app.css')
        @vite('resources/js/app.js')
        @vite('resources/js/app.tsx')
    
    </head>
   
   

    <!-- body -->
    <body class="container-fluid bg-slate-100">
        <!-- @include('layouts.partials.headerbar') -->
        <div id="app" class="text-center w-full">
        </div>
    </body>


    <!-- footer -->
    <footer>
        @include('layouts.partials.footer')
    </footer>


</html>