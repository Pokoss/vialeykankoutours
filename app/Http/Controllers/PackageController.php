<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $packages = Package::latest()->get();
        return Inertia::render('PackagesScreen', ['packages' => $packages]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $packages = Package::latest()->get();
        return Inertia::render('AdminAddPackages', ['packages' => $packages]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'addons' => 'string',
            'activities' => 'string',
            'duration' => 'required|integer',
            'price' => 'required|integer',
        ]);

        $value = $request->input('name') . ' ' . Str::random();
        $slug = Str::slug($value . '-');

        // $file = $request->file('image');
        // $filename = $slug . '.' . $file->extension();
        // $path = $file->storeAs('/images/packages', $filename, ['disk' => 'public_uploads']);

        Package::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'addons' => $request->input('addons'),
            'activities' => $request->input('activities'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'duration' => $request->input('duration'),
            'price' => $request->input('price'),
            'slug' => $slug,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Package $package)
    {
        return Inertia::render('PackageDetailsScreen', ['tour_package' => $package]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Package $package)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Package $package)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Package $package)
    {
        //
    }
}