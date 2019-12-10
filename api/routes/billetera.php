<?php

use controller\BilleteraController as BCnt;
use controller\AuthController;

$RestApi->get("/api/billetera/?",function($id){
    return BCnt::byId($id);
});


$RestApi->post("/api/billetera",function($data){
    //AuthController::validateAdmin();
    return BCnt::create($data->id,$data->idPersona,$data->dinero);
});

$RestApi->put("/api/billetera/?",function($id,$data){
    //AuthController::validateAdmin();
    return BCnt::update($id, $data->dinero);
});


//
//$RestApi->get("/api/Purchasing",function(){
//    return PCnt::all();
//});
//
//$RestApi->delete("/api/Purchasing/?",function($id){
//    AuthController::validateAdmin();
//    return PCnt::delete($id);
//});
////http://localhost/api/filterCompra?persona=4&nro_compra=2
//$RestApi->get("/api/filterCompra",function($params){
//    $persona = $params->getParam("persona");
//    $nro_compra = $params->getParam("nro_compra");
//    return PCnt::filterCompra($persona,$nro_compra);
//});
//
//
//$RestApi->get("/api/filter2",function($params){
//    $id = $params->getParam("id");
//    $tipo = $params->getParam("tipo");
//    return PCnt::filter2($id,$tipo);
//});