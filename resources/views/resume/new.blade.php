@extends('resume.app')

@section('content')
    @if(isset($resume_id))
    <div id="app" class="flex text-center h-screen max-h-screen w-full sticky overflow-y-auto" data-profile-id="{{ $resume_id }}"></div>
    @endif
@endsection