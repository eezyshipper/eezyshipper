<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersLocation extends Model
{
    use HasFactory;
    protected $table = 'users_location';
    protected $fillable = ['users_id','addresses_id'];

    public function eraser_taken(){
        return $this->hasMany(Address::class,'user_id', 'addresses_id');
    }
}
