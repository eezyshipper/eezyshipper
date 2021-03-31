<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatesCity extends Model
{
    use HasFactory;
    protected $table = 'states_cities';
    protected $fillable = [
        'id',
        'states_cities_name',
        'countries_id',
    ];

}
