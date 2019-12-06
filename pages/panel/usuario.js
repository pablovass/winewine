"use strict";

class Usuario{

 constructor(id,usuario,nombre,apellido,email,dinero){
     this.id=id;
     this.usuario=usuario;
     this.nombre=nombre;
     this.apellido=apellido;
     this.email=email;
     this.dinero=dinero;
 }
get id(){
return this.i;
}
get  usuario(){
return this.user;
}
get  nombre(){
return this.name;
}
get  apellido(){
return this.lastname;
}
get  email(){
 return this.emails;
}
get  dinero(){
 return this.money;
}

set id (value){
 this.i=value;
}
set usuario(value){
 this.user=value;
}
set nombre(value){
 this.name=value;
}
set apellido(value){
 this.lastname=value;
}
set email(value){
 this.emails=value;
}

set dinero(value){
 this.money=value;
}

}
var user=new Usuario();

function getUser(){
  
   let username=(localStorage.name);
   RestApi.get(`http://localhost/api/filteruser?usuario=${username}`)   
   
   .then((data)=>{
       user.id=data[0].id;
       user.usuario=data[0].usuario
       user.nombre=data[0].nombre
       user.apellido=data[0].apellido
       user.email=data[0].email
       user.dinero=data[0].dinero
       
       return(user)
   });
    
}

getUser()

function  makePurchese(){

}
function uploadToShoppingCart(){

}

function uploadToFavorites(){
    
}

//function getUser(){
//  var myCredentials;
//  if (sessionStorage.credentials =!null ){
//    
//  var myCredentials = {
//    username : userTag.value,
//    password : passTag.value
//  }
//}
//  return(myCredentials)
//}



