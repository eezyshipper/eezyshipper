<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resourcese extends Model
{
    use HasFactory;
    protected $table = 'resourceses';
    protected $fillable = [
        'id',
        'resourceses_slug',
        'resourceses_name',
        'desc'
    ];
}
