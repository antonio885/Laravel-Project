<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class votante extends Model
{
    use HasFactory;

    
    protected $fillable = [
        
        'nombre',
        'cedula',
        'apoyo_partido',
        'mesaVotacion'
        
    ];
    protected $hidden = [
        'created_at',
        'update_at'
    ];
}
