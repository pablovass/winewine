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

}
const user= new Usuario();

function getUser(){
    let idUser=4;
    fetch(`http://localhost/api/user/${idUser}`)   
    .then((res)=>res.json())
    .then((data)=> {
      //console.log(data)
      user.id=data.id
      user.usuario=data.usuario
      user.nombre=data.nombre
      user.apellido=data.apellido
      user.email=data.email
      user.dinero=data.dinero
      return (user)   
    })
}

//function showMoney(){
//  getUser()
//  dineroUser= `<p>$ ${user.dinero}</p>`;
//  document.getElementById('showMoney').innerHTML=dineroUser
//}
//showMoney()
function  makePurchese(){

}
function uploadToShoppingCart(){

}

function uploadToFavorites(){
    
}

