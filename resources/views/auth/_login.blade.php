{{-- <button data-bs-target="#authentication-modal" data-bs-toggle="modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Toggle modal
  </button> --}}
  
  <!-- Main modal -->
  
  @extends('layouts.app')
  @section('content')
  <div id="" class="flex flex-row bg-white justify-center w-full h-screen mb-5">
      
    <div class="w-full"></div>
    <div class="w-4/6  bg-slate-200 h-full rounded-0 shadow p-10">
          <!-- Modal content -->
             
              <div class="py-6">
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
                  <form class="space-y-6" action="/auth/login" method="post">
                    @csrf
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input type="email" name="email" id="email" class="bg-gray-200 border-b-2 border-gray-300 text-gray-900 text-sm rounded-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none borrder-0" placeholder="name@company.com" required>
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-200 border-b-2 border-gray-300 text-gray-900 text-sm rounded-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none" required>
                      </div>
                      <div class="flex justify-between">
                          <div class="flex items-start">
                              <div class="flex items-center h-5">
                                  <input id="remember" type="checkbox" name="remember" value="0" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800">
                              </div>
                              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                          </div>
                          <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                      </div>
                      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                      {{-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                      </div> --}}
                  </form>
              </div>
              <div class="py-6">
                <div class="flex justify-content-center  gap-x-2">
                    <button type="button" class="flex-grow-1  btn btn-danger bg-danger btn-md  rounded-0"> <a href="/auth/social/google">Google</a></button>
                    <button type="button" class="flex-grow-1  btn btn-secondary bg-secondary btn-md rounded-0"><a href="/auth/social/github">Github</a></button>
                    <!-- <button type="button" class="col-6 btn btn-primary btn-sm border-none">LinkedIn</button> -->
            </div>
          </div>
      </div>
  </div>


  @endsection