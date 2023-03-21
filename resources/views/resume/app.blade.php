<html>

<script ></script>
    
    <!-- head -->
    <head>
        @include('layouts.partials.head')
        <!-- @viteReactRefresh -->
        @vite('resources/css/app.css')
        @vite('resources/js/app.js')
        @vite('resources/js/app.tsx')
    
    </head>
   
   

    <!-- body -->
    <!-- <body class="container-fluid bg-slate-100 w-full h-screen [&::-webkit-scrollbar]:hidden overflow-y-auto"> -->
    <body class="container-fluid bg-slate-100 w-full ">
        <!-- @include('layouts.partials.headerbar') -->
        <div id="app" class="flex text-center h-screen max-h-screen">
        </div>
    </body>


    <!-- footer -->
    <footer>
        @include('layouts.partials.footer')
    </footer>


</html>