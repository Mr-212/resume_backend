
<nav class="row navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-5">
    <div class="continer-fluid">
    <div class="row">
        <div class="d-flex flex-row align-items-center col-6">
            <div class="text-white">
                <h3>ActivityHub</h3>
            </div>

        </div>
        <div class="col-6 text-right">
            <ul class="navbar-nav float-right">
                @if(auth()->user())
                <li class="nav-link nav-item">
                    <h3>{{ auth()->user()->name }}</h3>
                </li>
                @else
                
                <li class="nav-item">       
                    <button class="nav-link font-bold rounded-full px-4 py-1.5 bg-gray-200 opacity-100 text-black hover:bg-white hover:text-black" data-bs-toggle="modal" data-bs-target="#authentication-modal">Login</button></li>
                {{-- <li class="nav-link nav-item">
                    <button class="text-primary font-bold">Register</button>
                </li> --}}
                @endif
            </ul>

        </div>
       
    </div>
    </div>

</nav>