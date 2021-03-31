<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminsPermission extends Model
{
    use HasFactory;
    protected $table = 'admins_permission';
    protected $fillable = [
        'id',
        'admins_permission_permission',
        'admins_permission_status',
        'users_id',
    ];
}
