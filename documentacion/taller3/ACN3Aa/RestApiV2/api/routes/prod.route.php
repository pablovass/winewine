<?php

$RestApi->get("/api/producto/?",function($id) use($DB){
  $result = $DB->getOneResult("SELECT * FROM Producto WHERE id = $id");
  $DB->closeConection();
  return $result;
});

$RestApi->get("/api/producto",function($params) use($DB){
  $max = $params->getParam("max",5);
  $first = $params->getParam("first",0);
  $result = $DB->getList("SELECT * FROM Producto LIMIT $first, $max");
  $DB->closeConection();
  return $result;
});

$RestApi->post("/api/product",function($product) use($DB){
  $name = $product->name;
  $price = $product->price;
  /* TODO hacer validaciones */
  $stm = $DB->prepare("INSERT INTO Producto (nombre,precio) VALUES (?,?)");
  $stm->bind_param("sd",$name,$price);
  $DB->execute($stm);

  return "OK";
});


?>
