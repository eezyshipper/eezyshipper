<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class S_Location extends Model
{
    use HasFactory;
    protected $table = 's_location';
    protected $fillable =[
        	'id',
            'suppliers_id',
            'addresses_id'
    ];
}
