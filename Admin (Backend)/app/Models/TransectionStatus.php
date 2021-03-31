<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransectionStatus extends Model
{
    use HasFactory;
    protected $table = 'transection_status';
    protected $fillable = ['id','transection_status_name','transection_status_brief','transection_status_type',
'transection_process_no'];
}
