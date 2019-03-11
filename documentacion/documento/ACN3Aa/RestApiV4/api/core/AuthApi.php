<?php

class Auth {

  // Devuevle si el usuario está logeado o no
  function isLogedIn(){
    return isset($_SESSION["username"]) && $_SESSION["username"] != null;
  }

  // En caso de que el usuario no esté logeado devuelve un error
  function verify(){
    if (!$this->isLogedIn()){
      /* termina todo y muestra un error */
      header("HTTP/1.1 401 Unauthorized");
      echo "No tiene permisos para realizar esta operación";
      exit;
    }
  }

  function logIn($userName){
     $_SESSION["username"]  = $userName;
  }

  function logOut(){
     $_SESSION["username"] = null;
  }

}

$Auth = new Auth();

?>
