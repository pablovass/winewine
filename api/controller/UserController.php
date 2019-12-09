<?php

namespace controller;

use model\Usuarios;

class UserController{

  static function registrate($username,$pass){
    $user = new Usuarios();
    $user->usuario = $username;
    $user->pass = $pass;
    $user->email->$email;
    $user->dinero->$dinero;
    $user->apellido=$apellido;
    $user->nombre=$nombre;
   
    $user->role = 0;
    $user->create();
  }
public static function updatedinero($id,$dinero){  
    $user = Usuarios::byId($id);
    $user->dinero = $dinero;
    $user->updatedinero();
    return "OK";
}  

public static function byId($id){   
        return Usuarios::byId($id);
    }



static function filterU($username,$pass){
    return Usuarios::where("usuario = '$username' pass= '$pass'");

  }
  static function filteruser($username){
    return Usuarios::where("usuario = '$username' ");

  } 
}