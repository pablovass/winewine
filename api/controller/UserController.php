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

public static function byId($id){   
        return Usuarios::byId($id);
    }

 // public static function byUserName($username){   
  //    return Usuarios::byUserName($username);
  //}    
  
  static function filterU($username,$pass){
    return Usuarios::where("usuario = '$username' pass= '$pass'");

  }

//public static function getUser($id){
// //controller\UserController::authenticate($user->username,$user->pass);
//    $user = new Usuarios();
//    $user->usuario = $username;
//    $user->pass = $pass;
//    $user->role = 0;
//    $user->apellido=$apellido;
//    $user->nombre=$nombre;
//    $user->email->$email;
//    $user->dinero->$dinero;
//    $user->create();
//    return Usuarios::getUser($id);
//} 
}