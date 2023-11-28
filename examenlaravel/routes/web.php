<?php

use App\Http\Controllers\registraduria;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\votoscontroller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('administrador', [registraduria::class, 'index']);
Route::post('administrador', [registraduria::class,'store']);
Route::post('votantes', [votoscontroller::class,'store']);
Route::get('administradores/{id}',[registraduria::class, 'index']);
Route::get('votantes', [votoscontroller::class,'index']);
Route::get('votantesss/{nombre}', [votoscontroller::class,'indexNombre']);
Route::get('votantess/{mesaVotacion}', [votoscontroller::class,'index']);


// Route::resource('administrador', registraduria::class)->only(['index','store']);
Route::get('/cantidato', function () {
    return view('administrador');
});
Route::get('/votacion', function () {
    return view('votantes');
});