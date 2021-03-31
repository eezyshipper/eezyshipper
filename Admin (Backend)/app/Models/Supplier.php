<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;
    protected $table = 'suppliers';
    protected $fillable = [
        'id',
        'supplier_id',
        'suppliers_name',
        'suppliers_type',
        'suppliers_email',
        'suppliers_phone',
        'suppliers_status'
    ];
}
