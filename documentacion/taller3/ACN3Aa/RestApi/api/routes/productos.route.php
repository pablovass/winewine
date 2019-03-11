<?php

class Producto{    
    public $id;
    public $name;

    public function __construct($id,$name){
        $this->id = $id;
        $this->name = $name;
    }
}

if(!isset($_SESSION["productos"])){
     $_SESSION  ["productos"] = array();
}

$RestApi->get("/api/producto",function ($params){   
    $prods = $_SESSION["productos"];
    $first = $params->getParam("first",0);
    $max =  $params->getParam("max",5);
    return array_splice($prods,$first,$max) ;
});


$RestApi->get("/api/producto/?",function ($id){
   
    $prods = $_SESSION["productos"];

    return $prods[$id];
});



$RestApi->post("/api/producto",function ($prod){
    $prods = $_SESSION["productos"];
    array_push($prods,$prod);
    $_SESSION["productos"] =  $prods;
    return "Se guardo el producto " . $prod->id;
});
?>