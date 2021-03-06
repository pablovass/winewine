<?php

use controller\ProductController as PrCnt;
use controller\AuthController;

$RestApi->get("/api/product/?",function($id){
    return PrCnt::byId($id);

});

//$RestApi->put("/api/product/?",function ($id,$data){
//    $prod = ProductController::byId($id);
//    $prod->nombre = $data->nombre;
//    $prod->precio = $data->precio;
//    $prod->descripcion=$data->descripcion;
//    $prod->cant_producto=$data->cant_producto;
//    $prod->tipo->$data->tipo;
//    /*... guardar cambios en la base de datos ...*/
//    return $prod;
// });

$RestApi->put("/api/product/?",function($id,$data){
    //AuthController::validateAdmin();
    return PCnt::update($id, $data->precio);
});

 $RestApi->post("/api/product",function ($id,$data){
    $prod = ProductController::byId($id);
    $prod->nombre = $data->nombre;
    $prod->precio = $data->precio;
    $prod->descripcion=$data->descripcion;
    $prod->cant_producto=$data->cant_producto;
    $prod->tipo->$data->tipo;
    /*... guardar cambios en la base de datos ...*/
    return $prod;
 });
/****************/
$RestApi->get("/api/product",function(){
    return PrCnt::all();
});

$RestApi->delete("/api/product/?",function($id){
    AuthController::validateAdmin();
    return PrCnt::delete($id);
});

$RestApi->get("/api/filter",function($params){
    $category = $params->getParam("category");
    $max = $params->getParam("max",3);
    return PrCnt::filter($category,$max);
});

$RestApi->get("/api/filter2",function($params){
    $id = $params->getParam("id");
    $tipo = $params->getParam("tipo");
    return PrCnt::filter2($id,$tipo);
});

