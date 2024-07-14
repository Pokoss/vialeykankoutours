<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestimonialImage extends Model
{
    use HasFactory;

    protected $table = 'testimonial_images';

    protected $fillable = [
        'testimonial_id',
        'image'
    ];

    
}
