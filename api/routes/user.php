<?php
use controller\UserController as PrCnt;
use controller\AuthController;

$RestApi->post("/api/user",function ($user){
  controller\UserController::registrate($user->username,$user->pass);
  return "OK";
});

//http://localhost/api/updatedinero?id=4&dinero=21
$RestApi->put("/api/updatedinero?",function($id,$data){
  //AuthController::validateAdmin();
  return  PrCnt::updatedinero(id, $data->dinero);
});


//http://localhost/api/user/1
$RestApi->get("/api/user/?",function($id){
  return PrCnt::byId($id);

});

//http://localhost/api/filterU?usuario=jose2017&pass=123456
$RestApi->get("/api/filterU",function($params){
  $username = $params->getParam("usuario");
  $pass = $params->getParam("pass");
  return PrCnt::filterU($username, $pass);
});

//http://localhost/api/filterU?usuario=jose2017
$RestApi->get("/api/filteruser",function($params){
  $username = $params->getParam("usuario");
  
  return PrCnt::filteruser($username);
});

