<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class login extends Model
{
    use HasFactory;

    protected $fillable =[
'name',
'email',
'username',
'password',
    ];
    protected $hidden = [
        'password',
            'remember_token',
    ];
}
