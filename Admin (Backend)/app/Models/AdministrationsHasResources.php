<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdministrationsHasResources extends Model
{
    use HasFactory;
    protected $table = 'administrations_has_resourceses';
    protected $fillable = [
        'id',
        'administrations_id',
        'resourceses_id',
        'admins_permission_id',
        'users_id'
    ];
}
