<?php

namespace App\Http\Controllers;
use App\Models\votante;
use Illuminate\Http\Request;
use App\Http\Requests\requestvotante;

class votoscontroller extends Controller
{
    public function __contruct(){

    }
    /**
     * Display a listing of the resource.
     */
    public function index( $mesaVotacion = null  )
    {
        $query = votante::query();

        if ($mesaVotacion !== null) {
            $query->where('mesaVotacion', $mesaVotacion);
        }
        return $query->get();
    }
      
    public function indexNombre($nombre = null){
  
    $query = votante::query();
    if ($nombre !== null) {
     $query->where('nombre', $nombre);
 }

return $query->get();
 }
  
    

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(requestvotante $request)
    {
      votante::create($request->all());
    }

    
    public function update(Request $request, votante $cantidato)
    {
        votante::findOrFail($cantidato->id)
        ->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(votante $candidato)
    {
        $candidato = votante::findOrFail($candidato->id);
        $candidato->delete();
    }
}
