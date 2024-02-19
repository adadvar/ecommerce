<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\MobileRule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'mobile' => ['required_without:email', new MobileRule],
            'email' => 'required_without:mobile|email',
            'password' => 'required|string|confirmed'
        ]);
        $user = User::where('email', $request->email)->orWhere('mobile', to_valid_mobile_number($request->mobile))->first();

        if ($user) return response([
            'message' => 'user exist'
        ], 401);

        $user = User::create([
            'name' => $fields['name'],
            'mobile' => $fields['mobile'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        // Check email
        $user = User::where('email', $request->username)->orWhere('mobile', to_valid_mobile_number($request->username))->first();

        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
