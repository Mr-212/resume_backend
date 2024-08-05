@extends('layouts.app')

@section('content')

<div class="row text-center">
 <div class="card col-md-6 mx-auto my-10">
    <div class="card-body">
        <div class="card-header">{{ $message }}</div>

        <p class="mt-2"><a class="text-blue-400" href="/resume">Go to Resume --></a></p>
    </div>


 </div>
    {{-- <h3 class="font-bold text-orange-600">{{ $message }} !</h3>
    <a class="text-blue-400" href="/resume">Go to Resume --></a> --}}
</div>

@endsection
