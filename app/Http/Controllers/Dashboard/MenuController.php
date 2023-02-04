<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    //


    public function get_menu_list(){
        $list = ['Leads', 'Deals', 'Contacts' ,'Company' ];
        return response()->json($list);

        //return response()->json(['data'=>$list]);
    }
}
