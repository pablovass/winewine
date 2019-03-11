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

  $Auth->logIn($username,$result["role"]);
    
  $result["pass"] = "secret";

  //Devuelve la consulta
  return $result;
});


$RestApi->post("/api/user",function($user) use($DB,$Auth){
  $username = $user->usuario;
  $password = $user->pass;

  $stm = $DB->prepare("INSERT INTO Usuarios (usuario,pass,role) VALUES (?,?,0)");

  $stm->bind_param("ss",$username,$password);

  //En caso de un error explota solo
  $DB->execute($stm);

  //Cierra la conexión
  $DB->closeConection();

  //Devuelve la consulta
  return "OK";
});

$RestApi->post("/api/loggout",function($user) use($DB,$Auth){
  $Auth->logOut();

  //Devuelve la consulta
  return '{"msg":"OK"}';
});

?>
