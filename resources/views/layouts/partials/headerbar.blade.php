
<nav class="row navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-5">
    <div class="continer-fluid">
    <div class="row">
        <div class="d-flex flex-row align-items-center justify-center col-2 border-r-2 border-gray-100">
                <button class="text-gray-300 font-bold text-xl hover:border-b hover:bg-transparent hover:text-slate-300 py-0.5 px-2">Activities</button>
        </div>
        <div class="col-10 text-right">
            <ul class="navbar-nav float-right space-x-2">
                <li class="nav-item">       
                    <button class="font-bold py-1 hover:border-b opacity-100 "><a class="text-slate-100 hover:text-white" href="/who-am-i">About me ?</a></button>
                    {{-- <a class="font-bold py-1 opacity-100 text-slate-100 hover:border-b hover:text-white" href="/who-am-i">About me ?</a> --}}

                </li>
                @if(auth()->user())
                <li class="nav-link nav-item">
                    <h3>{{ auth()->user()->name }}</h3>
                </li>
                @else
                
              
                
                <li class="nav-item">       
                    <button class="nav-link font-bold px-2 py-1 opacity-100 text-slate-100 hover:outline-slate-200 hover:border-b hover:text-white" data-bs-toggle="modal" data-bs-target="#authentication-modal">Login</button>
                </li>
               
                {{-- <li class="nav-link nav-item">
                    <button class="text-primary font-bold">Register</button>
                </li> --}}
                @endif
            </ul>

        </div>
       
    </div>
    </div>

</nav>