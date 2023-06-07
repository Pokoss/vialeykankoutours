<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gallery = Gallery::latest()->limit(20)->get();
        return Inertia::render('GalleryScreen', ['gallery' => $gallery]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $gallery = Gallery::latest()->get();
        return Inertia::render('AdminAddGallery', ['gallery' => $gallery]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'string',
            'image' => 'required|image',
        ]);

        $file = $request->file('image');
        $filename = $file->getClientOriginalName();

        $path = $file->storeAs('/images/gallery', $filename, ['disk' => 'public_uploads']);

        Gallery::create([
            'title' => $request->input('title'),
            'image' => $path,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}