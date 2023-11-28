<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CantidatosModel extends Model
{
    use HasFactory;

    protected $table = "administrador";

    protected $fillable = [
        
        'candidato',
        'partido_politico'
        
    ];
    protected $hidden = [
        'created_at',
        'update_at'
    ];
}
