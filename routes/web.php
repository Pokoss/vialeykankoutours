<?php

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

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});

Route::get('/aboutus', function () {
    return Inertia::render('AboutUsScreen');
});

Route::get('/careers', function () {
    return Inertia::render('CareersScreen');
});

Route::get('/blog', function () {
    return Inertia::render('BlogScreen');
});

Route::get('/blog/readblog', function () {
    return Inertia::render('ReadBlogScreen');
});

Route::get('/events', function () {
    return Inertia::render('EventsScreen');
});
Route::get('/events/viewevent', function () {
    return Inertia::render('ViewEventScreen');
});

Route::get('/consultation', function () {
    return Inertia::render('ConsultationScreen');
});

Route::get('/packages', function () {
    return Inertia::render('PackagesScreen');
});

Route::get('/packages/packagedetails', function () {
    return Inertia::render('PackageDetailsScreen');
});

Route::get('/loginadmin', function () {
    return Inertia::render('AdminLoginScreen');
});

Route::get('/register', function () {
    return Inertia::render('RegisterScreen');
});

Route::get('/adminhome', function () {
    return Inertia::render('AdminHomeScreen');
});

Route::get('/gallery', function () {
    return Inertia::render('GalleryScreen');
});

Route::get('/airportpickup', function () {
    return Inertia::render('AirportPickUpScreen');
});

Route::get('/carhire', function () {
    return Inertia::render('CarHireScreen');
});