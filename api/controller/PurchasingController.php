<?php

namespace controller;

use model\Compras;
use db\DbController;

class PurchasingController{
    
    public static function all(){   
        return Compras::all();
    }
    
    
    public static function byId($id){   
        return Compras::byId($id);
    }
    
    public static function delete($id){   
        $purch =  Compras::byId($id);
        $purch->delete();
        return "Ok";
    }
    
 public static function create($id,$nro_compra,$idPersona,$idProducto,$nombre,$precio,$fecha){  
     $p = new Compras();
     $p->id=$id;
     $p->nro_compra=$nro_compra;
     $p->idPersona=$idPersona;
     $p->idProducto=$idProducto;
     $p->nombre=$nombre; 
     $p->precio=$precio;
     $p->fecha=$fecha;
    $p->create();
     return "OK";
  }
    
  public static function update($id,$nro_compra,$idPersona,$idProducto,$nombre,$precio,$fecha){  
     $p = Compra::byId($id);
     $p->id=$id;
     $p->nro_compra=$nro_compra;
     $p->idPersona=$idPersona;
     $p->idProducto=$idProducto;
     $p->nombre=$nombre; 
     $p->precio=$precio;
     $p->fecha=$fecha;
    
     $p->update();
     return "OK";
    }
 public static function filtercompra($idPersona,$nro_compra){   
     return Compras::where("idPersona = '$idPersona' and  nro_compra='$nro_compra'");
 }
public static function comprapersona($persona){   
    return Compras::where("idPersona = '$persona'");
}
public static function where_total_compra($nro_compra){   
    return Compras::where_total_compra("nro_compra = '$nro_compra'");
}
public static function where_distinct_nombre($idPersona){   
    return Compras::where_distinct_nombre("idPersona = '$idPersona'");
}
public static function todos_los_totales($idPersona){   
    return Compras::todos_los_totales("idPersona='$idPersona'");
}
public static function muestra_compra($idPersona){   
    return Compras::muestra_compra("idPersona='$idPersona'");
}
}
