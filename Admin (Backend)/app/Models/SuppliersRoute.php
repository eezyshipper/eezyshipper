<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuppliersRoute extends Model
{
    use HasFactory;
    protected $table = 'suppliers_route';
    protected $fillable = [
        'id',
        'suppliers_id',
        'suppliers_route_from',
        'suppliers_route_to'

    ];
}
