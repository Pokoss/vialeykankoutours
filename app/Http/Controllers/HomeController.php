<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Package;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $events = Event::latest()->limit(3)->get();
        $packages = Package::get();
        return Inertia::render('HomeScreen', ['events' => $events, 'packages' => $packages]);
    }

}
