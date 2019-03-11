<?php
/* Este es un ejemplo de servicio REST para manejar la session */


$RestApi->post("/api/login",function($user) use($DB,$Auth){
  $username = $user->usuario;
  $password = $user->pass;

  //En caso de no encontrar el usuario devuelve un error
  $result = $DB->getOneResult("SELECT * FROM Usuarios " .
  " WHERE usuario = '$username' AND pass = '$password' ");

  //Cierra la conexión
  $DB->closeConection();

  $Auth->logIn($username);

  //Devuelve la consulta
  return '{"msg":"OK"}';
});

$RestApi->post("/api/loggout",function($user) use($DB,$Auth){
  $Auth->logOut();

  //Devuelve la consulta
  return '{"msg":"OK"}';
});

?>
