<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parcel extends Model
{
    use HasFactory;
    protected $table = 'parcels';
    protected $fillable = [
        'id',
        'users_id',
        'parcels_bought_from',
        'warehouses_id',
        'parcels_status',
        'parcels_weight',
        'parcels_d_x',
        'parcels_d_y',
        'parcels_d_z',
        'parcels_volumetric_weight',
    ];
}
