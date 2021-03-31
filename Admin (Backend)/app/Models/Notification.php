<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $table = 'notifications';
    protected $fillable = [
        'id',
        'notifications_type',
        'notifications_title',
        'notifications_msg',
        'notifications_status',
        'users_id',
    ];
}
