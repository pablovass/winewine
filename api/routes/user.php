<?php

use controller\AuthController;

$RestApi->post("/api/user",function ($user){
  controller\UserController::registrate($user->username,$user->pass);
  return "OK";
});

$RestApi->get("/api/users",function ($user){
  AuthController::validateAdmin();
  return controller\UserController::all();
});
