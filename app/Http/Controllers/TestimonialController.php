<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use App\Models\TestimonialImage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Str;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $testimonials = Testimonial::latest()->get();
        return Inertia::render('AdminAddTestimonials', ['testimonials' => $testimonials]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|string',
            'name' => 'required|string',
            'content' => 'required|string',
        ]);

        Testimonial::create([
            'title' => $request->input('title'),
            'name' => $request->input('name'),
            'content' => $request->input('content'),
        ]);
    }

    public function addImage(Request $request){
        $request->validate([
            'editName' => 'required',
            'image' => 'required',
            'editId' => 'required',
            'editTitle' => 'required',          
        ]);

        $date = Carbon::now()->format('YmdHisv');
        $value = $request->editTitle . ' ' . $date . ' ' . Str::random();

        $image_slug = Str::slug($value, '-');

        $file = $request->file('image');
        $filename = $image_slug . '.' . $file->extension();
        $path = $file->storeAs('/Images/testimonial', $filename, ['disk' => 'public_uploads']);

        $testimonial_image = TestimonialImage::create([
            'testimonial_id' => $request->editId,
            'image'=>$path
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonial $testimonial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
    }
}
