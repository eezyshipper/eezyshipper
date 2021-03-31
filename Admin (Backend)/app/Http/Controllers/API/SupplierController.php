<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\S_Location;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SupplierController extends Controller
{
    public function getSupplier(){
        $suppliers = DB::table('suppliers')
            ->join('s_location','suppliers.supplier_id','=','s_location.suppliers_id')
            ->join('addresses','s_location.addresses_id','=','addresses.id')
            ->select('suppliers.*','addresses.*')->get();
        return response()->json($suppliers,200);
    }
    public function createSupplier(Request $request){

         $validator = $request->validate([
             'suppliers_name' =>'required | string',
             'suppliers_phone' =>'required',
             'suppliers_email' =>'required',
             'suppliers_type' =>'required',
         ]);
        if ($validator == null) {
            return response()->json([
                'success' => false,
            ], 404);
        }
        else{
            $supplier = new Supplier();
            $supplier->suppliers_name = $request->suppliers_name;
            $supplier->suppliers_phone = $request->suppliers_phone;
            $supplier->suppliers_email = $request->suppliers_email;
            $supplier->suppliers_type = $request->suppliers_type;
            $supplier->suppliers_status = '1';
            $supplier->save();
            Supplier::where('id',$supplier->id)->update(['supplier_id' => 'SN'.$supplier->id]);
            $supplierAddress = new Address();
            $supplierAddress->addresses_ln1_street_house = $request->address_line1;
            $supplierAddress->addresses_ln1_area_postcode = $request->address_line2;
            $supplierAddress->addresses_ln3_extrainfo = $request->address_line3;
            $supplierAddress->save();
            $supplierLocation = new S_Location();
            $supplierLocation->suppliers_id = 'SN'.$supplier->id;
            $supplierLocation->addresses_id = $supplierAddress->id;
            $supplierLocation->save();
            return response()->json(['success'=>true,],201);
        }
    }
    public function editSupplier(Request $request,$supplier_id){

        $validator = $request->validate([
            'suppliers_name' =>'required|string',
            'suppliers_phone' =>'required',
            'suppliers_email' =>'required',
            'suppliers_type' =>'required',
        ]);
        if ($validator == null) {
            return response()->json([
                'success' => false,
            ], 404);
        }
        else{
            $supplier = Supplier::where('supplier_id',$supplier_id)->first();
            $supplier->suppliers_name = $request->suppliers_name;
            $supplier->suppliers_phone = $request->suppliers_phone;
            $supplier->suppliers_email = $request->suppliers_email;
            $supplier->suppliers_type = $request->suppliers_type;
            $supplier->suppliers_status = $request->suppliers_status;
            $supplier->save();
            $supplierLocation = S_Location::where('suppliers_id',$supplier_id)->first();
            $supplierAddress = Address::where('id',$supplierLocation->addresses_id)->first();
            $supplierAddress->addresses_ln1_street_house = $request->address_line1;
            $supplierAddress->addresses_ln1_area_postcode = $request->address_line2;
            $supplierAddress->addresses_ln3_extrainfo = $request->address_line3;
            $supplierAddress->save();
            return response()->json(['success'=>true,],201);
        }
    }
    public function deleteSupplier($supplier_id){
        $supplierLocation = S_Location::where('suppliers_id',$supplier_id)->first();
        Address::where('id',$supplierLocation->addresses_id)->delete();
        $supplierLocation->delete();
        Supplier::where('supplier_id',$supplier_id)->delete();
        return response()->json(['success'=>true],200);
    }
}
