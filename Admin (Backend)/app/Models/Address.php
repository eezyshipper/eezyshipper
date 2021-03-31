<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    protected $table = 'addresses';
    protected $fillable = [
        'id',
        'addresses_zipcode',
        'addresses_ln1_street_house',
        'addresses_ln1_area_postcode',
        'addresses_ln3_extrainfo',
        'states_cities_id',
        'countries_id',
    ];
}
