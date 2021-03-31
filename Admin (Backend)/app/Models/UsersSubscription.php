<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersSubscription extends Model
{
    use HasFactory;
    protected $table = 'users_subscription';
    protected $fillable = ['id','users_id','subscriptions_id','payments_id','users_subscription_status',
'users_subscription_activated_at','users_subscription_expire_at'];
}
