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


$RestApi->get("/api/filterbilletera",function($params){
    $idPersona = $params->getParam("idPersona");
    return BCnt::filterbilletera($idPersona);
});

$RestApi->delete("/api/billetera/?",function($id){
    //AuthController::validateAdmin();
    return BrCnt::delete($id);
});
