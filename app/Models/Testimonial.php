<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'content',
        'image'
    ];

    public function image(){
        return $this->hasMany(TestimonialImage::class,'testimonial_id','id');
    }
}
