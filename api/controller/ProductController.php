<?php

namespace controller;

use model\Producto;
use db\DbController;

class ProductController{
    
    public static function all(){   
        return Producto::all();
    }
    
    
    public static function byId($id){   
        return Producto::byId($id);
    }
    
    public static function delete($id){   
        $prod =  Producto::byId($id);
        $prod->delete();
       return "Ok";
    
    }
    

  public static function create($id,$nombre,$precio,$descripcion,$cant_producto,$tipo){  
    $p = new Producto();
    $p->id=$id;
    $p->nombre = $nombre;
    $p->precio = $precio;
    $p->descripcion=$descripcion;
    $p->cant_producto=$cant_producto;
    $p->tipo->$tipo;
    $p->create();
  }
 
 // public static function update($id,$nombre,$precio,$descripcion,$cant_producto,$tipo){  
 //    $p = Producto::byId($id);
 //    $p->nombre = $nombre;
 //    $p->precio = $precio;
 //    $p->descripcion=$descripcion;
 //    $p->cant_producto=$cant_producto;
 //    $p->tipo->$tipo;
 //    $p->update();
 //    return "OK";
 //}

 public static function update($id,$precio){  
    $p = Producto::byId($id);
    $p->precio = $precio;
    $p->update();
    return "OK";
}
    public static function filter($category,$max){   
        return Producto::where(" tipo = $category LIMIT $max");
    }
    //http://localhost/api/filter2?tipo=1&id=2
   static function filter2($id,$tipo){
       return Producto::where("id = '$id' and tipo = '$tipo'");
   
     }
    }