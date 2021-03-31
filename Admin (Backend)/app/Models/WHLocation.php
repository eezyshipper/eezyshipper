<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WHLocation extends Model
{
    use HasFactory;
    protected $table = 'wh_location';
    protected $fillable = ['id', 'warehouses_id', 'addresses_id'];
}
