<?php

use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HireController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PickupController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', fn() => Inertia::render('HomeScreen'));
Route::get('/aboutus', fn() =>Inertia::render('AboutUsScreen'));
Route::get('/careers', fn() => Inertia::render('CareersScreen'));
Route::get('/loginadmin', fn() => Inertia::render('AdminLoginScreen'));
Route::get('/register', fn() => Inertia::render('RegisterScreen'));
Route::get('/adminhome', fn() => Inertia::render('AdminHomeScreen'));

Route::resource('/', HomeController::class);
Route::resource('/events', EventController::class);
Route::resource('/gallery', GalleryController::class);
Route::resource('/airportpickup', PickupController::class);
Route::resource('/carhire', HireController::class);
Route::resource('/consultation', ConsultationController::class);
Route::resource('/packages', PackageController::class);
Route::resource('/blog', PostController::class);

Route::get('/addteam', function () {
    return Inertia::render('AdminAddEmployee');
});
Route::get('/addpackages', function () {
    return Inertia::render('AdminAddPackages');
});
Route::get('/addevent', function () {
    return Inertia::render('AdminAddEvent');
});
Route::get('/addgallery', function () {
    return Inertia::render('AdminAddGallery');
});
