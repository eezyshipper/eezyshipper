<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentStatus extends Model
{
    use HasFactory;
    protected $table = 'payment_status';
    protected $fillale = [
        'id',
        'payment_status_code',
        'payment_status_msg'
    ];
}
