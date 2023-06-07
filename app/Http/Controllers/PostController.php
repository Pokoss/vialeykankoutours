<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $latest = Post::latest()->first();
        if ($latest)
            $posts = Post::where('id', '!=', $latest->id)->get();
        else
            $posts = Post::get();

        return Inertia::render('BlogScreen', ['posts' => $posts, 'latest' => $latest]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $posts = Post::get();
        return Inertia::render('AdminAddBlog', ['posts' => $posts]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'image' => 'required|image|max:2048',
        ]);

        $value = $request->input('title') . ' ' . Str::random();
        $slug = Str::slug($value . '-');

        $file = $request->file('image');
        $filename = $slug . '.' . $file->extension();
        $path = $file->storeAs('/images/blog', $filename, ['disk' => 'public_uploads']);

        Post::create([
            'title' => $request->input('title'),
            'slug' => $slug,
            'description' => $request->input('description'),
            'content' => $request->input('content'),
            'imageurl' => $path,
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('ReadBlogScreen', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}