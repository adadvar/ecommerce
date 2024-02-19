<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::resource('products', ProductController::class);

// Public routes
Route::post('/register', [AuthController::class, 'register'])->name('auth.register');;
Route::post('/login', [AuthController::class, 'login'])->name('auth.login');;
Route::get('/products', [ProductController::class, 'index'])->name('products.index');;
Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');;
Route::get('/products/search/{title}', [ProductController::class, 'search'])->name('products.search');;


// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/products', [ProductController::class, 'create'])->name('products.create');;
    Route::put('/products/{id}', [ProductController::class, 'update'])->name('products.update');;
    Route::delete('/products/{id}', [ProductController::class, 'delete'])->name('products.delete');;
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');;
});
