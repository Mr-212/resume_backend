<!DOCTYPE html>
<html>
    
    <!-- head -->
    <head>
        @include('layouts.partials.head')
        @viteReactRefresh
        @vite('resources/css/app.css')
        {{-- @vite('resources/js/app.js') --}}
        @vite('resources/js/app.jsx')
        @vite('resources/js/app.tsx')

    </head>
   
   

    <!-- body -->
    <body class="bg-gray-300">
        <section>
             @include('layouts.partials.headerbar')
        </section>
      
        <section class="container mt-14">
            <div class="">
                <div class="text-primary">
                </div>
                @yield('content')
            </div>
        </section>
        
        </main>
      

    </body>

    <div class="col-3 float-right">
        @include('auth.modals.login')
    </div>


    <!-- footer -->
    <footer>
        @include('layouts.partials.footer')
        @stack('scripts')
    </footer>


</html>