<?php
use controller\UserController as PrCnt;
use controller\AuthController;

$RestApi->post("/api/user",function ($user){
  controller\UserController::registrate($user->username,$user->pass);
  return "OK";
});
//http://localhost/api/user/1
$RestApi->get("/api/user/?",function($id){
  return PrCnt::byId($id);

});