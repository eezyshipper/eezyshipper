<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Models\PasswordReset;
use App\Notifications\PasswordResetRequest;
use App\Notifications\PasswordResetSuccess;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class PasswordResetController extends Controller
{
    /**
     * Create token password reset
     *
     * @param  [string] email
     * @return [string] message
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ], 400);
        }

        $user = User::where('email', $request->email)->first();
        if (is_null($user)) {
            return response()->json([
                'success' => false,
                'message' => 'We cant find a user with that e-mail address.',
            ], 404);
        }
        
        
      //  dd($user->email);
        $passwordReset = PasswordReset::updateOrCreate(
            ['email' => $user->email],
            [
                'email' => $user->email,
                'token' => Str::random(60),
                ]
        );
        if ($user && $passwordReset) {
            $user->notify(
                new PasswordResetRequest($passwordReset)
            );
        }

        return response()->json([
            'success' => true,
            'message' => 'We have e-mailed your password reset link!',
        ], 200);
    }

    /**
     * Find token password reset
     *
     * @param  [string] $token
     * @return [string] message
     * @return [json] passwordReset object
     */
    public function find($token)
    {
        $passwordReset = PasswordReset::where('token', $token)
            ->first();
        if (is_null($passwordReset)) {
            return response()->json([
                'success' => false,
                'message' => 'This password reset token is invalid.',
            ], 404);
        }

        if (Carbon::parse($passwordReset->updated_at)->addMinutes(720)->isPast()) {
            $passwordReset->delete();
            return response()->json([
                'success' => false,
                'message' => 'This password reset token is invalid.',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Password reset token is valid!',
            'data' => [
                'email' => $passwordReset->email,
            ],
        ], 200);
    }

    /**
     * Reset password
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @param  [string] token
     * @return [string] message
     * @return [json] user object
     */
    public function reset(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'password' => ['required', 'string', 'confirmed'],
            'token' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->getMessageBag(),
            ], 400);
        }

        $passwordReset = PasswordReset::where([
            ['token', $request->token],
        ])->first();

        if (is_null($passwordReset)) {
            return response()->json([
                'success' => false,
                'message' => 'This password reset token is invalid.',
            ], 404);
        }

        $user = User::where('email', $passwordReset->email)->first();
        if (is_null($user)) {
            return response()->json([
                'success' => false,
                'message' => 'We cant find a user with that e-mail address.',
            ], 404);
        }

        $user->password = Hash::make($request->password);
        $user->save();
        $passwordReset->delete();
        $user->notify(new PasswordResetSuccess($passwordReset));
        return response()->json([
            'success' => true,
            'message' => 'Password reseted successfully!',
        ], 200);
    }
}
