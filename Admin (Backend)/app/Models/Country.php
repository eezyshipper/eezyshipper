<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    protected $table = 'countries';
    protected $fillable = [
        'id',
        'countries_name',
        'countries_iso_code_2_letters',
        'countries_iso_code_3_letters'
    ];
}
