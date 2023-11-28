<?php

namespace App\Http\Controllers;

use App\Http\Middleware\candidatomiddleware;
use App\Models\CantidatosModel;
use Illuminate\Http\Request;
use App\Http\Requests\requestcandidato;


class registraduria extends Controller
{
    public function __contruct(){

    }
    /**
     * Display a listing of the resource.
     */
    public function index($id = null)
    {
       $query = CantidatosModel::query();
      if ($id !== null) {
        $query->where('id', $id);
    }
      return $query->get();
    }

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(requestcandidato $request)
    {
      CantidatosModel::create($request->all($request->id));
    }

    
    public function update(Request $request, CantidatosModel $cantidato)
    {
        CantidatosModel::findOrFail($cantidato->id)
        ->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CantidatosModel $candidato)
    {
        $candidato = CantidatosModel::findOrFail($candidato->id);
        $candidato->delete();
    }
}
