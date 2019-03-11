<?php
/* Este es un ejemplo de servicio REST para la entidad producto */

//Se define un servicio que devuelve una lista de productos.
// * El " use ($DB)" es para poder utilizar la librería de base de datos
// * En caso de la metodo "get" el orden de los parametros de la funcion callback
//    es la siguiente:
//    1 - Todos las variables buscadas en la URL usando ? (en esete caso no hay)
//    2 - El objeto Params que contiene metodos utiles para obtener los
//        parametros de la URL.
//    3 - El contenido del body enviado por el cliente (En este caso no tiene).
$RestApi->get("/api/producto",function($params) use($DB){
  // Saca los valores de los parametros de la URL con valores por defecto
  $max = $params->getParam("max",5);
  $first = $params->getParam("first",0);

  //Obtiene una lista de arrays asociativos con las columnas y valores de la consulta
  $result = $DB->getList("SELECT * FROM Producto LIMIT $first, $max");

  //Cierra la conexión
  $DB->closeConection();

  //Devuelve la consulta
  return $result;
});

//Se define un servicio que devuelve la cantidad total de productos. (para el paginado)
$RestApi->get("/api/producto/cantidad",function() use($DB){
  //Cuenta la cantidad de registros
  $count = $DB->getOneResult("SELECT COUNT(*) FROM Producto");
  //Prepara el resultado
  $result = array( "cantidad" =>  (int) $count["COUNT(*)"]);

  //Cierra la conexión
  $DB->closeConection();

  //Devuelve la cantidad
  return $result;
});

//Se define un servicio que devuelve un producto por id pasado por la URL
$RestApi->get("/api/producto/?",function($id) use($DB){
  $result = $DB->getOneResult("SELECT * FROM Producto WHERE id = $id");
  $DB->closeConection();
  return $result;
});

//Se define un servicio para crear un producto
// * En caso del los metodos que no son "get" (como post o put) el orden de los
//    parametros de la funcion callback es la siguiente:
//    1 - Todos las variables buscadas en la URL usando ? (en esete caso no hay)
//    2 - El contenido del body enviado por el cliente. (El json)
//    3 - El objeto Params que contiene metodos utiles para obtener los
//        parametros de la URL.
$RestApi->post("/api/producto",function($product) use($DB,$Auth){
  //Verifica que tenga permisos
  $Auth->verify();

  $name = $product->nombre;
  $price = $product->precio;
  /* TODO hacer validaciones */
  $stm = $DB->prepare("INSERT INTO Producto (nombre,precio) VALUES (?,?)");
  // El primer parametros del bind es un strign que tiene que contener el tipo
  //   de datos de los parametros que se le agregan a la consulta.
  // Para definir el tipo de datos es un caracter por cada dato siendo:
  //    s : string
  //    i : Entero
  //    d : float o double
  // En este caso es un String y un Double por eso "sd"
  // Siempre se tienen que pasar como referencia. Es decir que solo le podemos
  //   pasar variables y no datos fijos (Ejmplo: 2 , true ... etc)
  $stm->bind_param("sd",$name,$price);

  //En caso de un error explota solo
  $DB->execute($stm);
  return "OK";
});

//Se define un servicio para actualizar un producto
$RestApi->put("/api/producto/?",function($id,$product) use($DB,$Auth){
  //Verifica que tenga permisos
  $Auth->verify();

  $name = $product->nombre;
  $price = $product->precio;
  /* TODO hacer validaciones */

  $stm = $DB->prepare("UPDATE Producto SET nombre = ? , precio = ? WHERE id = ?");
  $stm->bind_param("sdi",$name,$price,$id);
  $DB->execute($stm);
  return "OK";
});

//Se define un servicio para borrar un producto por id en la URL
$RestApi->delete("/api/producto/?",function($id) use($DB,$Auth){
  //Verifica que tenga permisos
  $Auth->verify();
  
  $stm = $DB->prepare("DELETE FROM Producto WHERE id = ?");
  $stm->bind_param("i",$id);
  $DB->execute($stm);
  return "OK";
});



?>
