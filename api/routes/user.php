<?php




header('Content-Type: application/json');

use controller\UserController as PrCnt;
use controller\AuthController;

$RestApi->post("/api/user",function ($user){
  controller\UserController::registrate($user->usuario, $user->pass,$user->nombre, $user->apellido, $user->email );
  return "OK";
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


$RestApi->delete("/api/user/?",function($id){
  //AuthController::validateAdmin();
  return PrCnt::delete($id);
});

//update dinero 

$RestApi->put("/api/user/?",function($params){
  $id = $params->getParam("id");
  $dinero = $params->getParam("dinero");
  return PrCnt::update($id,$dinero);
});

