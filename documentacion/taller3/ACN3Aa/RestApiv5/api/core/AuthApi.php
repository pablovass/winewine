<?php

class Auth {

  // Devuevle si el usuario está logeado o no
  function isLogedIn(){
    return isset($_SESSION["username"]) && $_SESSION["username"] != null;
  }
    
  function isAdmin(){
    return $this->isLogedIn() && isset($_SESSION["role"]) && $_SESSION["role"] == 1;
  }

  // En caso de que el usuario no esté logeado devuelve un error
  function verify(){
    if (!$this->isAdmin()){
      /* termina todo y muestra un error */
      header("HTTP/1.1 401 Unauthorized");
      echo "No tiene permisos para realizar esta operación";
      exit;
    }
  }

  function logIn($userName,$role){
     $_SESSION["username"]  = $userName;
     $_SESSION["role"]  = $role;
      
  }

  function logOut(){
     $_SESSION["username"] = null;
     $_SESSION["role"]  = null;
  }

}

$Auth = new Auth();

?>
