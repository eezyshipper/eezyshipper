<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administration extends Model
{
    use HasFactory;
    protected $table = 'administrations';
    protected $fillable = [
        'id',
        'administrations_slug',
        'administrations_name',
        'desc',
    ];
}
