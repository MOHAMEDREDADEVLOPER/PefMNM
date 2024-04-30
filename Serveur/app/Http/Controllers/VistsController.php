<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Visit;

class VistsController extends Controller
{
  
    public function index(Request $request)
{
    $id = $request->id;
    
    $visits = Visit::with(['annonces' => function ($query) use ($id) {
                            $query->where('id_client', $id)->select('id', 'titre', 'id_client');
                        }, 'clients'])
                    ->whereHas('annonces', function ($query) use ($id) {
                        $query->where('id_client', $id);
                    })
                    ->get();

    return response()->json($visits);
}
public function destroy(Request $request){
    $visit=Visit::find($request->id);
    $visit->delete();
    return response()->json($visit);
}
    
}
