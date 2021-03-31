<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Subscription;

class SubscriptionController extends Controller
{
    public function getplan(){
        $subscriptions = DB::table('subscriptions');
            // ->join('s_location','suppliers.supplier_id','=','s_location.suppliers_id')
            // ->join('addresses','s_location.addresses_id','=','addresses.id')
            // ->select('suppliers.*','addresses.*')->get();
        return response()->json($subscriptions,200);
    }
    public function createplan(Request $request){
        $validator = Validator::make($request->all(), [
            'slug' => ['required'],
            'name' => ['required', 'string'],
            'monthly_fee' => ['required', 'string'],
            'yearly_fee' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ], 404);
        }
        $plan = new Subscription();
        $plan->subscriptions_slug = $request->slug;
        $plan->subscriptions_name = $request->name;
        $plan->subscriptions_monthly_fee = $request->monthly_fee;
        $plan->subscriptions_yearly_fee = $request->yearly_fee;
        $plan->save();
        return response()->json(['success'=>true,],201);
    }
    public function editplan(Request $request,$subscription_id){

        $validator = Validator::make($request->all(), [
            'slug' => ['required'],
            'name' => ['required', 'string'],
            'monthly_fee' => ['required', 'string'],
            'yearly_fee' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ], 404);
        }
            $plan = Subscription::where('id',$subscription_id)->first();
            $plan->subscriptions_slug = $request->slug;
            $plan->subscriptions_name = $request->name;
            $plan->subscriptions_monthly_fee = $request->monthly_fee;
            $plan->subscriptions_yearly_fee = $request->yearly_fee;
            $plan->save();
            return response()->json(['success'=>true,],201);
    }
    public function deleteplan($subscription_id){
        $plan = Subscription::where('id',$subscription_id)->first();
        Subscription::where('id',$subscription_id)->delete();
        return response()->json(['success'=>true],200);

    }
}
