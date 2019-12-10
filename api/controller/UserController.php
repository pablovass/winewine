<?php

namespace controller;

use model\Usuarios;

class UserController{

  static function registrate($usuario,$pass,$email,$apellido,$nombre){
    $user = new Usuarios();
    $user->usuario = $usuario;
    $user->pass = $pass;
    $user->email = $email;
    
    $user->apellido= $apellido;
    $user->nombre= $nombre;
    $user->role = 0;
    $user->create();
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

public static function delete($id){   
  $user =  Usuarios::byId($id);
  $user->delete();
 return "Ok";

}
//public static function update($id,$dinero){  
//  $user = Usuarios::byId($id);
//  $user->dinero = $dinero;
//  $user->update();
//  return "OK";
//}
static function update($id,$dinero){
  return Usuarios::where("id = '$id' and dinero ='$dinero' ");

} 

}

