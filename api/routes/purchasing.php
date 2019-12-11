<?php

use controller\PurchasingController as PCnt;
use controller\AuthController;

$RestApi->get("/api/purchasing/?",function($id){
    return PCnt::byId($id);

});

$RestApi->post("/api/purchasing",function($data){
    AuthController::validateAdmin();
    return PCnt::create($data->name,$data->price);
});

$RestApi->put("/api/purchasing/?",function($id,$data){
    AuthController::validateAdmin();
    return PCnt::update($id,$data->name,$data->price);
});

$RestApi->get("/api/purchasing",function(){
    return PCnt::all();
});

$RestApi->delete("/api/purchasing/?",function($id){
    AuthController::validateAdmin();
    return PCnt::delete($id);
});

$RestApi->get("/api/filtercompra",function($params){
    $persona = $params->getParam("persona");
    $nro_compra = $params->getParam("nro_compra");
    return PCnt::filtercompra($persona,$nro_compra);
});

$RestApi->get("/api/comprapersona",function($params){
    $persona = $params->getParam("persona");
    return PCnt::comprapersona($persona);
});

$RestApi->get("/api/where_total_compra",function($params){
    $nro_compra = $params->getParam("nro_compra");
    return PCnt::where_total_compra($nro_compra);
});

$RestApi->get("/api/nombres_diferentes_una_compra",function($params){
    $nro_compra = $params->getParam("nro_compra");
    return PCnt::where_distinct_nombre($nro_compra);
});
$RestApi->get("/api/todos_los_totales",function($params){
    $idPersona = $params->getParam("idPersona");
    return PCnt::todos_los_totales($idPersona);
});