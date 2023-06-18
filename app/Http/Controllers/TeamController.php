<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
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
        $team = Team::latest()->get();
        return Inertia::render('AdminAddEmployee', ['team' => $team]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'position' => 'string',
            'description' => 'string',
            'image' => 'required|image',
        ]);

        $file = $request->file('image');
        $filename = $file->getClientOriginalName();

        $path = $file->storeAs('/images/teams', $filename, ['disk' => 'public_uploads']);

        Team::create([
            'name' => $request->input('name'),
            'position' => $request->input('position'),
            'description' => $request->input('description'),
            'image' => $path,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        $team->delete();
    }
}
