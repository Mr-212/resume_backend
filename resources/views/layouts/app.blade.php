<html>
    
    <!-- head -->
    <head>
        @include('layouts.partials.head')
        @vite('resources/css/app.css')
        @vite('resources/js/app.js') 
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
   
   

    <!-- body -->
    <body class="container-fluid bg-slate-100">
        @include('layouts.partials.headerbar')

        <!-- <div id="app" class="text-center w-full"> -->
        @inertia
        <h3>Welcome</h3>
        <!-- </div> -->
    </body>


    <!-- footer -->
    <footer>
        @include('layouts.partials.footer')
    </footer>


</html>