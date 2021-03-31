<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PayCard extends Model
{
    use HasFactory;
    protected $table = 'pay_cards';
    protected $fillable = [
        'id',
        'users_id',
        'pay_cards_type',
        'pay_cards_number',
        'pay_cards_expire_at',
        'pay_cards_cvc',
        'pay_cards_allow_auto_renual',
    ];
}
