<?php

namespace controller;

use model\Billetera;
use db\DbController;
use db\Model;
class BilleteraController{
    
    public static function all(){   
        return Billetera::all();
    }
    public static function byId($id){   
        return Billetera::byId($id);
    }

    public static function create($id ,$idPersona, $dinero){  
        $b = new Billetera();
        $b->id  = $id;
        $b->idBilletera = $idBilletera;
        $b->create();
        return "OK";
    }

 
    public static function update($id,$dinero){  
        $b = Billetera::byId($id);
        $b->dinero = $dinero;
        $b->update();
        return "OK";
    }
   //http://localhost/api/filter2?tipo=1&id=2
  static function filterbilletera($idPersona){
      return Billetera::where("idPersona = '$idPersona'");
  
    }

//    
//    public static function delete($id){   
//        $prod =  Producto::byId($id);
//        $prod->delete();
//       return "Ok";
//    
//    }
//    
//  
//  public static function create($id,$nombre,$precio,$descripcion,$cant_producto,$tipo){  
//    $p = new Producto();
//    $p->id=$id;
//    $p->nombre = $nombre;
//    $p->precio = $precio;
//    $p->descripcion=$descripcion;
//    $p->cant_producto=$cant_producto;
//    $p->tipo->$tipo;
//    $p->create();
//  }

//    public static function filter($category,$max){   
//        return Producto::where(" tipo = $category LIMIT $max");
//    }

////     public static function prepare($id){  
////        
////        $stm =DbController::prepare("DELETE from producto where id = ?");
////        $stm ->bind_para,("s",$nombre);
////        DbController::execute($stm);
////}
////
}