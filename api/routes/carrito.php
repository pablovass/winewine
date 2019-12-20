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
    //AuthController::validateAdmin();
    return CCnt::delete($id);
});

$RestApi->post("/api/carrito",function($data){
   // AuthController::validateAdmin();
    return CCnt::create($data->idPersona,$data->idProducto,$data->nombre,$data->precio,$data->fecha);
});

$RestApi->get("/api/carritoxpersona",function($params){
    $persona = $params->getParam("persona");
    return CCnt::carritoxpersona($persona);
});

$RestApi->get("/api/where_total_carrito",function($params){
    $idPersona = $params->getParam("idPersona");
    return CCnt::where_total_compra($idPersona);
});
////////////////////
//$RestApi->delete_carrito("/api/delete_carrito/?",function($idProducto){
//    //AuthController::validateAdmin();
//    return CCnt::delete_carrito($idProducto);
//});
//
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

//

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
