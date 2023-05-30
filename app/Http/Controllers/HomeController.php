<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Package;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $events = Event::latest()->limit(3)->get();
        $packages = Package::get();
        $testimonials = Testimonial::latest()->limit(5)->get();
        
        return Inertia::render('HomeScreen', [
            'events' => $events, 
            'packages' => $packages, 
            'testimonials' => $testimonials
        ]);
    }

}