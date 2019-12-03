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
    
    public static function create($name,$price){  
        $p = new Producto();
        $p->nombre = $name;
        $p->precio = $price;
        $p->create();
        return "OK";
    }
    
     public static function update($id,$name,$price){  
        $p = Producto::byId($id);
        $p->nombre = $name;
        $p->precio = $price;
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
