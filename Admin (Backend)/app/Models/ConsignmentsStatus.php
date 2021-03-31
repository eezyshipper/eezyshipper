<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsignmentsStatus extends Model
{
    use HasFactory;
    protected $table = 'consignments_status';
    protected $fillable = [
        'id',
        'props_prefix',
        'props_current_id',
        'props_opening_day',
        'props_time',
        'max_volume'
    ];
}
