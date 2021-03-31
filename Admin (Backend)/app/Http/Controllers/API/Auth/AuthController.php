<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function auth_user()
    {
        $user = User::find(Auth::user()->id);
        if (is_null($user)) {
            return response()->json([
                'success' => false,
                'message' => 'no auth user',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => 'authenticated user details fetched',
            'data' => [
                'user' => $user,
            ]
        ], 200);
    }
}
