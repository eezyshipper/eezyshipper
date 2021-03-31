<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Auth\LoginAPIController;
use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\Auth\RegisterAPIController;
use App\Http\Controllers\API\Auth\PasswordResetController;
use App\Http\Controllers\API\CustomerController;
use App\Http\Controllers\API\SupplierController;
use App\Http\Controllers\API\SubscriptionController;
use App\Http\Controllers\API\WarehouseController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([
    'prefix' => 'auth',
], function () {
    Route::get('createToken', [LoginAPIController::class, 'createToken']);
    Route::post('login', [LoginAPIController::class, 'login']);
    Route::post('register', [RegisterAPIController::class, 'register']);
    Route::post('reset', [PasswordResetController::class, 'reset']);
    Route::post('reset_request', [PasswordResetController::class, 'create']);
    Route::get('find/{token}', [PasswordResetController::class, 'find']);
    // Route::get('/auth/createToken', 'API\Auth\LoginAPIController@createToken'); // just to check
    // Route::post('login', 'API\Auth\LoginAPIController@login');
    // Route::post('register', 'API\Auth\RegisterAPIController@register');
    // Route::post('reset_request', 'API\Auth\PasswordResetController@create');
    // Route::get('find/{token}', 'API\Auth\PasswordResetController@find');
    // Route::post('reset', 'API\Auth\PasswordResetController@reset');
});
Route::group([
    'middleware' => 'auth:api',
], function () {
    Route::get('logout', [LoginAPIController::class, 'logout']);
    Route::get('user', [AuthController::class, 'auth_user']);
});
//--------------------------SUPPLIER API----------------------------//
//------------------------------------------------------------------//
Route::get('/all-supplier',[SupplierController::class,'getSupplier']);
Route::post('/create-supplier',[SupplierController::class,'createSupplier']);
Route::post('/edit-supplier/{supplier_id}',[SupplierController::class,'editSupplier']);
Route::delete('/delete-supplier/{supplier_id}',[SupplierController::class,'deleteSupplier']);
Route::get('/getCustomerbyes/{es_no}',[CustomerController::class,'getCustomerByES']);

/*************************************************************************/
/****************************** Subscription plan API *************************/
/*************************************************************************/

Route::get('/all-plan',[SubscriptionController::class,'getplan']);
Route::post('/create-plan',[SubscriptionController::class,'createplan']);
Route::put('/edit-plan/{subscription_id}',[SubscriptionController::class,'editplan']);
Route::delete('/delete-plan/{subscription_id}',[SubscriptionController::class,'deleteplan']);


/*************************************************************************/
/****************************** Ware houses API *************************/
/*************************************************************************/

Route::get('/all-warehouses',[WarehouseController::class,'index']);
Route::post('/create-warehouse',[WarehouseController::class,'add']);
Route::put('/edit-warehouse/{warehouses_id}',[WarehouseController::class,'edit']);
Route::delete('/delete-warehouse/{warehouses_id}',[WarehouseController::class,'delete']);
