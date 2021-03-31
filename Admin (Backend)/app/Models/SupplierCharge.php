<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupplierCharge extends Model
{
    use HasFactory;
    protected $table = 'supplier_chargees';
    protected $fillable = [
        'id',
        'suppliers_route_id',
        'suppliers_id',
        'supplier_chargees_weight_from',
        'supplier_chargees_weight_to',
        'supplier_chargees_rate',
        'supplier_chargees_markup',
        'supplier_chargees_status'


    ];
}
