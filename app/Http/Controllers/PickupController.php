<?php

namespace App\Http\Controllers;

use App\Models\Pickup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PickupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('AirportPickUpScreen');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'details' => 'required|string',
        ]);

        Pickup::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'details' => $request->details,
        ]);

        return redirect()->back()->with('success', 'We have received you request, we shall be in contact soon');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pickup $pickup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pickup $pickup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pickup $pickup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pickup $pickup)
    {
        //
    }
}
