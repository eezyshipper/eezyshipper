<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsignmentsProp extends Model
{
    use HasFactory;
    protected $table = 'consignments_props';
    protected $fillable = [
        'id',
        'consignments_status_name',
        'consignments_status_brief',
        'consignments_status_type',
        'consignments_process_no'
    ];
}
