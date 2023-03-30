<!DOCTYPE html>
<html>
    
    <!-- head -->
    <head>
        @include('layouts.partials.head')
        @vite('resources/css/app.css')
        @vite('resources/js/app.js')
        @viteReactRefresh
        @vite('resources/js/app.jsx')
    </head>
   
   

    <!-- body -->
    <body class="bg-gray-300">
        <section>
             @include('layouts.partials.headerbar')
        </section>
      
        <section class="container mt-14">
            <div class="">
                <div class="text-primary">
                    <h3>Welcome</h3>  
                </div>
                <!-- @yield('content') -->
            </div>
        </section>
        
        </main>
      

    </body>

    <div class="col-3 float-right">
        @include('auth.login')
    </div>


    <!-- footer -->
    <footer>
        @include('layouts.partials.footer')
    </footer>


</html>