<?php

use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HireController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PickupController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Support\Facades\Auth;
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
Route::get('/aboutus', fn() => Inertia::render('AboutUsScreen'));
Route::get('/careers', fn() => Inertia::render('CareersScreen'));
Route::get('/other-services', function () {
    return Inertia::render('OtherServicesScreen');
});
// Route::get('/login', fn() => Inertia::render('AdminLoginScreen'));
// Route::get('/register', fn() => Inertia::render('RegisterScreen'));

Route::resource('/', HomeController::class);
Route::resource('/events', EventController::class);
Route::resource('/gallery', GalleryController::class);
Route::resource('/airportpickup', PickupController::class);
Route::resource('/carhire', HireController::class);
Route::resource('/consultation', ConsultationController::class);
Route::resource('/packages', PackageController::class);
Route::resource('/blog', PostController::class);
Route::resource('/testimonials', TestimonialController::class);
Route::resource('/team', TeamController::class);

Route::middleware('auth')->group(function () {
    Route::get('/admin', [HomeController::class, 'create']);
    Route::get('/admin/home', [HomeController::class, 'create']);
    Route::get('/admin/team', [TeamController::class, 'create']);
    Route::get('/admin/packages', [PackageController::class, 'create']);
    Route::get('/admin/event', [EventController::class, 'create']);
    Route::get('/admin/gallery', [GalleryController::class, 'create']);
    Route::get('/admin/blog', [PostController::class, 'create']);
    Route::get('/admin/testimonials', [TestimonialController::class, 'create']);
});

Auth::routes();
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'create'])->name('home');
