<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReturnPercel extends Model
{
    use HasFactory;
    protected $table = 'return_percel';
    protected $fillable =[
        'id',
        'parcels_id',
        'users_id',
        'warehouses_id',
        'return_percel_return_to',
        'return_percel_reseon',
        'return_percel_brief',
        'return_percel_status'
    ];
}
