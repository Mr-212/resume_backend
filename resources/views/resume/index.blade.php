
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
@include('layouts.partials.headersJs')

<div class="row h-screen" >
    <div class="container justify-content-center bg-gray-200 border border-right">

        <div class="d-flex justify-content-around align-items-center gap-2 p-3 border-b-2 border-primary ">
            <!-- <div class="" >
                <button type="button" class="">New CV</button>
            </div> -->
            <!-- <div class="w-32 bg-white rounded font-bold"> -->
            <div class="font-bold">
                
                <span id="btn_create_cv" class="align-self-center text-slate-600 font-bold text-xl hover:text-blue-800">Create<i class="pl-1 fa fa-plus"></i></span>
            </div> 
           <div class="d-flex gap-3" id="cv_create_div">
            <form method="get" action="/resume/create">
                <input type="input" class="h-7 pl-2"  name="title" placeholder="Title"/>
                <button type="submit"><span class="py-1 px-6 bg-green-600 hover:bg-blue-600 text-white font-bold text-lg">Next<i class="pl-4 fa fa-arrow-right"></i></span></button>
            </form>
            </div>
        </div>
       

    </div>
    <!-- <div class="col-9 bg-secondary" id="app">

    </div> -->

</div>


<script type="text/javascript">
     $('#cv_create_div').hide();
    $(document).ready(function(){
       
        $('#btn_create_cv').click(function(){
            $('#cv_create_div').toggle();
        })

    });
</script>    
