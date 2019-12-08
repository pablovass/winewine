<?php

use controller\PurchasingController as PCnt;
use controller\AuthController;

$RestApi->get("/api/Purchasing/?",function($id){
    return PCnt::byId($id);

});

$RestApi->post("/api/Purchasing",function($data){
    AuthController::validateAdmin();
    return PCnt::create($data->name,$data->price);
});

$RestApi->put("/api/Purchasing/?",function($id,$data){
    AuthController::validateAdmin();
    return PCnt::update($id,$data->name,$data->price);
});

$RestApi->get("/api/Purchasing",function(){
    return PCnt::all();
});

$RestApi->delete("/api/Purchasing/?",function($id){
    AuthController::validateAdmin();
    return PCnt::delete($id);
});
//http://localhost/api/filterCompra?persona=4&nro_compra=2
$RestApi->get("/api/filterCompra",function($params){
    $persona = $params->getParam("persona");
    $nro_compra = $params->getParam("nro_compra");
    return PCnt::filterCompra($persona,$nro_compra);
});

//
//$RestApi->get("/api/filter2",function($params){
//    $id = $params->getParam("id");
//    $tipo = $params->getParam("tipo");
//    return PCnt::filter2($id,$tipo);
//});