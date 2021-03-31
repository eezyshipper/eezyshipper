<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IdentityVerification extends Model
{
    use HasFactory;
    protected $table = 'identity_verifications';
    protected $fillable = [
        'id',
        'users_id',
        'doc_type',
        'f_name',
        'l_name',
        'identify_verifications_doc_no',
        'identity_verifications_valid_from',
        'identity_verifications_expire',
        'identity_verifications_varify_at',
        'users_varified_by',
        'varification_status',
        'identity_verifications_document_for',
    ];
}
