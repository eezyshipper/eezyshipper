<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\User;

class CustomerController extends Controller
{
    public function getCustomerByES($es_no)
    {
        $user = User::where('es_no',$es_no)->first();
        if ($user){
            return response()->json($user,200);
        }
        else{
            return response()->json('Customer is not found',400);
        }
    }
}
