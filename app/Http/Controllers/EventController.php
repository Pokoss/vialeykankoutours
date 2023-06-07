<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::latest()->get();
        return Inertia::render('EventsScreen', ['events'=>$events]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $events = Event::latest()->get();
        return Inertia::render('AdminAddEvent', ['events'=>$events]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'details' => 'string',
            'activities' => 'string',
            'date' => 'required|date',
            'image' => 'required|image',
        ]);

        $value = $request->input('title') . ' ' . Str::random();
        $slug = Str::slug($value . '-');

        $file = $request->file('image');
        $filename = $slug . '.' . $file->extension();
        $path = $file->storeAs('/images/events', $filename, ['disk' => 'public_uploads']);

        Event::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'details' => $request->input('description'),
            'activities' => $request->input('activities'),
            'date' => $request->input('date'),
            'image' => $path,
            'slug' => $slug,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return Inertia::render('ViewEventScreen', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }
}