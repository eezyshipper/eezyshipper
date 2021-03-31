<?php
namespace App\Http\Controllers\API\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Address;
use App\Models\UsersLocation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
class RegisterAPIController extends Controller
{
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email', 'unique:users', 'max:50'],
            'password' => ['required', 'string', 'min:6', 'max:255'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ], 404);
        }
        $user = new User();
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
//        $user->remember_token = Str::random(10);
        $user->save();
        User::where('id', $user->id)->update([
            'es_no'=>sprintf('ES%09d', $user->id)
        ]);
        $address= new Address();
        $address->countries_id = $request->country;
        $address->save();
        $location = new UsersLocation();
        $location->addresses_id = $address->id;
        $location->users_id = $user->id;
        $location->save();
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        return response()->json([
            'success' => true,
            'message' => 'Registration Successful!',
            'data' => ['user' => $user],
            'token' => $token
        ], 201);
    }
}

















