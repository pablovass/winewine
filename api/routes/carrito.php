<?php

use controller\CarritoController as CCnt;
use controller\AuthController;

$RestApi->get("/api/carrito/?",function($id){
    return CCnt::byId($id);
});

$RestApi->get("/api/carrito",function(){
    return CCnt::all();
});

$RestApi->delete("/api/carrito/?",function($id){
    AuthController::validateAdmin();
    return CCnt::delete($id);
});

$RestApi->post("/api/carrito",function($data){
   // AuthController::validateAdmin();
    return CCnt::create($data->idPersona,$data->idProducto,$data->nombre,$data->precio,$data->fecha);
});

//
//$RestApi->put("/api/carrito/?",function($id,$data){
//    AuthController::validateAdmin();
//    return PCnt::update($id,$data->name,$data->price);
//});
//

//

//
//$RestApi->get("/api/filtercompra",function($params){
//    $persona = $params->getParam("persona");
//    $nro_compra = $params->getParam("nro_compra");
//    return PCnt::filtercompra($persona,$nro_compra);
//});
//
//$RestApi->get("/api/comprapersona",function($params){
//    $persona = $params->getParam("persona");
//    return PCnt::comprapersona($persona);
//});
//
//$RestApi->get("/api/where_total_compra",function($params){
//    $nro_compra = $params->getParam("nro_compra");
//    return PCnt::where_total_compra($nro_compra);
//});
//
//$RestApi->get("/api/where_distinct_nombre",function($params){
//    $idPersona = $params->getParam("idPersona");
//    return PCnt::where_distinct_nombre($idPersona);
//});
//$RestApi->get("/api/todos_los_totales",function($params){
//    $idPersona = $params->getParam("idPersona");
//    return PCnt::todos_los_totales($idPersona);
//});
//$RestApi->get("/api/muestra_compra",function($params){
//    $idPersona = $params->getParam("idPersona");
//    return PCnt::muestra_compra($idPersona);
//});
