<?php

namespace controller;

use model\Usuarios;

class UserController{

  static function registrate($username,$pass){
    $user = new Usuarios();
    $user->usuario = $username;
    $user->pass = $pass;
    $user->role = 0;
    $user->create();
  }

public static function byId($id){   
        return Usuarios::byId($id);
    }
}
