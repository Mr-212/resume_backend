@extends('resume.app')

@section('content')
@include('layouts.partials.headersJs')

<div class="row h-full" id="app" >
    <div class="container justify-content-center bg-gray-200 border border-right">
        <div class="d-flex justify-content-around align-items-center gap-2 p-3">
            <div class="font-bold">
                {{-- <span id="btn_create_cv" class="align-self-center text-slate-600 font-bold text-xl hover:text-blue-800">Create<i class="pl-1 fa fa-plus"></i></span> --}}
            </div> 
           
        </div>     

    </div>
    <!-- <div class="col-9 bg-secondary" id="app">

    </div> -->

</div>
@endsection

{{-- <script type="text/javascript">
     $('#cv_create_div').hide();
    $(document).ready(function(){
       
        $('#btn_create_cv').click(function(){
            $('#cv_create_div').toggle();
        })

    });
</script>     --}}
