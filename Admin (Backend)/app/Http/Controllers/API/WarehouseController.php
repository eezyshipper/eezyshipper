<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Warehouse;


class WarehouseController extends Controller
{
    public function index()
    {
        $Warehouses = Warehouse::all();
        $Warehouses = DB::table('Warehouses');
            // ->join('s_location','suppliers.supplier_id','=','s_location.suppliers_id')
            // ->join('addresses','s_location.addresses_id','=','addresses.id')
            // ->select('suppliers.*','addresses.*')->get();
        return response()->json($Warehouses,200);
    }
    public function add(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'type' => ['required','string'],
            'status' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ], 404);
        }
        $warehouse = new Warehouse();
        $warehouse->warehouses_name = $request->name;
        $warehouse->warehouses_type = $request->type;
        $warehouse->warehouses_status = $request->status;
        $warehouse->save();
        return response()->json(['success'=>true,],201);
    }
    public function edit(Request $request,$warehouses_id){
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'type' => ['required','string'],
            'status' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ], 404);
        }
        $warehouse = Warehouse::where('id',$warehouses_id)->first();
        $warehouse->warehouses_name = $request->name;
        $warehouse->warehouses_type = $request->type;
        $warehouse->warehouses_status = $request->status;
        $warehouse->save();
        return response()->json(['success'=>true,],201);
    }
}
