<nav class="row navbar sticky-top navbar-expand-lg bg-slate-200 px-10">
    <div class="continer">
    <div class="row">
        <div class="d-flex flex-row align-items-center col-6">
            <div class="text-white">
                {{-- <button data-toggle="modal" data-target="#create-resume-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Create
                </button> --}}
                <button data-bs-toggle="modal" data-bs-target="#create-resume-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-md focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Create
                </button>
            </div>

        </div>
        <div class=" col-6 text-right">
            <ul class="d-flex align-items-center justify-content-end navbar-nav float-right">
                <li class="nav-item">       
                    {{-- <h4 class="nav-link font-bold text-green-600">Ali Raza</h4> --}}
                    <h4 class="nav-link font-bold text-green-600">{{auth()->user()->name}}</h4>

                </li>
                <li class="nav-item">
                    <button class=" font-bold text-gray-400"><a href="/auth/logout">Logout</a></button>
                </li>
            </ul>

        </div>
       
    </div>
    </div>

</nav>


<div id="create-resume-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"  class="modal fade">
    <div class="modal-dialog px-5" >
        <!-- Modal content -->
        <div class="modal-content bottom-0 bg-white rounded-lg shadow dark:bg-gray-700" >
            <div class="modal-header px-10">
                <h5 class="modal-title">Create Resume</h5>
                   <button type="button" data-bs-dismiss="modal" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only" data-bs-dismiss="modal">Close modal</span>
                    </button>
                {{-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> --}}
              </div>

            <div class="modal-body px-6 py-6 lg:px-8">
                <form class="space-y-6" action="/resume/create" method="get">
                    <div>
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resume Name</label>
                        <input type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                    </div>
                    <div class="w-full text-right">
                        <button type="submit"><span class="py-2 px-6 bg-green-600 hover:bg-blue-600 text-white font-bold text-lg text-right">Next<i class="pl-4 fa fa-arrow-right"></i></span></button>
                    </div>   
                    
                </form>
            </div>
        </div>
    </div>
</div> 

