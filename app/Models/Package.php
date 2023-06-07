<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'addons',
        'activities',
        'start_date',
        'end_date',
        'duration',
        'image',
        'price',
        'country',
        'city',
        'address',
        'latitude',
        'longitude',
        'slug',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getActivitiesAttribute($value)
    {
        return json_decode($value);
    }

    public function getAddonsAttribute($value)
    {
        return json_decode($value);
    }
}
