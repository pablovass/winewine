<?php

namespace controller;

use model\Carrito;
use db\DbController;

class CarritoController{
  
public static function all(){   
    return Carrito::all();
   }
  
  public static function byId($id){   
    return Carrito::byId($id);
  }
 public static function delete($id){   
    $purch =  Carrito::byId($id);
    $purch->delete();
    return "Ok";
   }

public static function create($idPersona,$idProducto,$nombre,$precio,$fecha){  
    $c = new Carrito();
    $c->idPersona=$idPersona;
    $c->idProducto=$idProducto; 
    $c->nombre=$nombre; 
    $c->precio=$precio;
    $c->fecha=$fecha;
    $c->create();
    return "OK";
 }
   
// public static function update($id,$nro_compra,$idPersona,$idProducto,$nombre,$precio,$fecha){  
//    $p = Carrito::byId($id);
//    $p->id=$id;
//    $p->nro_compra=$nro_compra;
//    $p->idPersona=$idPersona;
//    $p->idProducto=$idProducto;
//    $p->nombre=$nombre; 
//    $p->precio=$precio;
//    $p->fecha=$fecha;
//   
//    $p->update();
//    return "OK";
//   }
//public static function filtercompra($idPersona,$nro_compra){   
//    return Carrito::where("idPersona = '$idPersona' and  nro_compra='$nro_compra'");
//}
//ublic static function comprapersona($persona){   
//   return Carrito::where("idPersona = '$persona'");
//
//ublic static function where_total_compra($nro_compra){   
//   return Carrito::where_total_compra("nro_compra = '$nro_compra'");
//
//ublic static function where_distinct_nombre($idPersona){   
//   return Carrito::where_distinct_nombre("idPersona = '$idPersona'");
//
//ublic static function todos_los_totales($idPersona){   
//   return Carrito::todos_los_totales("idPersona='$idPersona'");
//
//ublic static function muestra_compra($idPersona){   
//   return Carrito::muestra_compra("idPersona='$idPersona'");
//
}
