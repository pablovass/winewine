<?php

use controller\AuthController;

$RestApi->post("/api/login",function ($credentials){
   $role = AuthController::authenticate($credentials->username,$credentials->password);
   return array("username" => $credentials->username, "role" => $role);
});

$RestApi->get("/api/valid",function (){
   AuthController::validate();
   return "Valid";
});

$RestApi->post("/api/logout",function (){
   AuthController::logout();
   return "Valid";
});
