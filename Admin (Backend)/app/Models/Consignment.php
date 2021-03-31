<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consignment extends Model
{
    use HasFactory;
    protected $table = 'consignments';
    protected $fillable = [
        'id',
        'consignments_col',
        'consignments_props_id',
        'consignments_number',
        'consignments_status_id'
    ];
}
