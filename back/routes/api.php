<?php

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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::post('/login',[\App\Http\Controllers\UserController::class,'login']);
Route::group(['middleware'=>['auth:sanctum']],function (){
    Route::post('/logout', [\App\Http\Controllers\UserController::class,'logout']);
    Route::post('/me', [\App\Http\Controllers\UserController::class,'me']);
    Route::get('/listprof', [\App\Http\Controllers\StudentController::class,'listprof']);
    Route::post('/buscarEst/{ci}', [\App\Http\Controllers\StudentController::class,'buscarEst']);
    Route::post('/listado', [\App\Http\Controllers\StudentController::class,'listado']);
    Route::resource('student', App\Http\Controllers\StudentController::class);
});
