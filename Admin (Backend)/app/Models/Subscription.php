<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;
    protected $table = 'subscriptions';
    protected $fillable = [
        'id',
        'subscriptions_slug',
        'subscriptions_name',
        'subscriptions_monthly_fee',
        'subscriptions_yearly_fee'
    ];
}
