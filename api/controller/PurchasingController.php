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
    
 public static function create($idPersona,$idProducto1,$precio1,$cant_producto1,$idProducto2,$precio2,$cant_producto2,$idProducto3,$precio3,$cant_producto3,$idProducto4,$precio4,$cant_producto4,$idProducto5,$precio5,$cant_producto5,$nro_compra,$precio_total_compra,$cant_producto,$fecha){  
     $p = new Compras();
     $p->idPersona=$idPersona;
     $p->idProducto1=idProducto1;
     $p->precio1=$precio1;
     $p->cant_producto1=$cant_producto1;
     $p->idProducto2=$idProducto2;
     $p->precio2=$precio2;
     $p->cant_producto2=$cant_producto2;
     $p->idProducto3=$idProducto3;
     $p->precio3=$precio3;
     $p->cant_producto3=$cant_producto3;
     $p->idProducto4=$idProducto4;
     $p->precio4=$precio4;
     $p->cant_producto4=$cant_producto4;
     $p->idProducto5=$idProducto5;
     $p->precio5=$precio5;
     $p->cant_producto5=$cant_producto5;
     $p->nro_compra=$nro_compra;
     $p->precio_total_compra=$precio_total_compra;
     $p->cant_producto=$cant_producto;
     $p->fecha=$fecha;
     $p->create();
     return "OK";
  }
    
  public static function update($idPersona,$idProducto1,$precio1,$cant_producto1,$idProducto2,$precio2,$cant_producto2,$idProducto3,$precio3,$cant_producto3,$idProducto4,$precio4,$cant_producto4,$idProducto5,$precio5,$cant_producto5,$nro_compra,$precio_total_compra,$cant_producto,$fecha){  
     $p = Compra::byId($id);
     $p->idPersona=$idPersona;
     $p->idProducto1=idProducto1;
     $p->precio1=$precio1;
     $p->cant_producto1=$cant_producto1;
     $p->idProducto2=$idProducto2;
     $p->precio2=$precio2;
     $p->cant_producto2=$cant_producto2;
     $p->idProducto3=$idProducto3;
     $p->precio3=$precio3;
     $p->cant_producto3=$cant_producto3;
     $p->idProducto4=$idProducto4;
     $p->precio4=$precio4;
     $p->cant_producto4=$cant_producto4;
     $p->idProducto5=$idProducto5;
     $p->precio5=$precio5;
     $p->cant_producto5=$cant_producto5;
     $p->nro_compra=$nro_compra;
     $p->precio_total_compra=$precio_total_compra;
     $p->cant_producto=$cant_producto;
     $p->fecha=$fecha;
    
     $p->update();
     return "OK";
    }
 public static function filterCompra($idPersona,$nro_compra){   
     return Compras::where("idPersona = '$idPersona' and  nro_compra='$nro_compra'");
 }

 // //http://localhost/api/filter2?tipo=1&id=2
 //static function filter2($id,$tipo){
 //    return Producto::where("id = '$id' and tipo = '$tipo'");
 //
 //  }
    
}
