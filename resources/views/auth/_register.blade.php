{{-- <button data-bs-target="#authentication-modal" data-bs-toggle="modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Toggle modal
  </button> --}}
  
  <!-- Main modal -->
  
  @extends('layouts.app')
  @section('content')
  <div id="" class="flex flex-row bg-white justify-center w-full h-screen mb-5">
      
    <div class="w-full"></div>
    <div class="w-4/6 bg-slate-200 h-full rounded-0 shadow p-10">
          <!-- Modal content -->
              
              <div class="py-6">
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Register</h3>
                  <form class="space-y-6" action="/auth/register" method="post">
                    @csrf
                    <div class="">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" class="bg-slate-200 border-b-2 border-b-white text-gray-100 text-sm rounded-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-black dark:placeholder-gray-200 dark:text-white outline-none" placeholder="Ali Raza" required>
                    </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                          <input type="email" name="email" id="email" class="bg-slate-200 border-b-2 border-white text-gray-900 text-sm rounded-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="raza_997@hotmail.com" required>
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-slate-200  border-b-2 border-white text-gray-900 text-sm rounded-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none" required>
                      </div>
                      <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" placeholder="••••••••" class="bg-slate-200 border-white border-b-2 border-b-black text-gray-900 text-sm rounded-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none" required>
                    </div>
                    
                      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                     
                  </form>
              </div>

            </div>
  </div>


  @endsection