<?php

use controller\FileController;

$RestApi->post("/api/file",function ($data){
  return FileController::write($data->data,$data->name);
});


$RestApi->get("/api/file/?",function ($name){
  FileController::read($name);
  return "???";
});



$RestApi->get("/api/test1",function ($name){
  return "Hola pablo";
});