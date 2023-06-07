<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Package;
use App\Models\Post;
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

    public function create()
    {
        $events_count = Event::count();
        $packages_count = Package::count();
        $blog_count = Post::count();
        $testimonials_count = Post::count();

        return Inertia::render('AdminHomeScreen', [
            'events_count' => $events_count,
            'packages_count' => $packages_count,
            'blog_count' => $blog_count,
            'testimonials_count' => $testimonials_count,
        ]);
    }
}