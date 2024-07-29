
@extends('layouts.app')

@section('content')
<!-- Container for demo purpose -->
<div class="container my-24 mx-auto md:px-6">
    <!-- Section: Design Block -->
    <section class="mb-32">
      <h2 class="mb-6 text-center text-3xl font-bold">Pricing</h2>

      <p class="mb-12 font-bold text-center text-neutral-500 dark:text-neutral-300">
            We provide the following products with flexible options.
      </p>



      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        @foreach($plans as $plan)

        <div class="mb-6 lg:mb-0">
          <div
            class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>{{$plan->title}}</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>${{$plan->price}}</strong>
                <small class="text-sm text-neutral-500 dark:text-neutral-300">/{{$plan->interval}}</small>
              </h3>
              @if(Auth::user()->checkStripePrice( $plan->stripe_id))
                <button type="button"
                        class="disabled inline-block w-full rounded-sm bg-green-800 px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-600 hover:text-black focus:bg-sky-400 focus:outline-none focus:ring-0 active:bg-sky-600">

                <span>Active</span>


                {{-- <a  class="" href="/subscription/create">Buy</a> --}}

                </button>
              @else
              <button type="button"
                class="inline-block w-full rounded-sm bg-blue-800 px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-200 hover:text-black focus:bg-sky-400 focus:outline-none focus:ring-0 active:bg-sky-600">

                <a  class="" href="{{route('subscription.create',['plan_id' => $plan->stripe_id])}}">Buy</a>


                {{-- <a  class="" href="/subscription/create">Buy</a> --}}

              </button>
              @endif
            </div>
            {{-- <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                  updates
                </li>
              </ol>
            </div> --}}
          </div>
        </div>
        @endforeach

      </div>
    </section>
  </div>

  @endsection
