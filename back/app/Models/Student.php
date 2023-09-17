<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombres',
        'apellidos',
        'unidad',
        'curso',
        'cedula',
        'correo',
        'tutor',
        'celular',
      //  'imagen',
   //     'categoria',
    ];

    public function grupo(){
        return $this->hasMany(Grupo::class);
    }
}
