<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transection extends Model
{
    use HasFactory;
    protected $table = 'transections';
    protected $fillable = [
    'id',
    'parcels_parcels_id',
    'parcels_users_users_id',
    'parcels_warehouses_warehouses_id',
    'payments_payments_id',
    'consignments_id',
    'transection_status_id',
    'suppliers_chargees_id',
    'transections_from',
    'transections_destination',
    'transections_eta',
    'suppliers_route_id',
    'transections_price',
    'suppliers_id',
];
}
