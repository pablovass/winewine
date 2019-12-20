"use strict"
var dineroUser;

function sayHi(){
    const tagH2= document.createElement("h2")
          tagH2.innerText=`${localStorage.user}` 
          document.getElementById('sayHi').appendChild(tagH2).parentNode.nodeName
}

window.onload=sayHi()

function showMoney(){
    fetch(`http://localhost/api/filterbilletera?idPersona=${localStorage.id}`)   
    .then((res)=>res.json())
    .then((data)=>{
      var money=``
      data.forEach(function(dato) {
        money+=`<h2>$${dato.dinero}</h2>`
        localStorage.setItem('dinero',dato.dinero)
       });
      document.getElementById('getShowMoney').innerHTML=money;
              
  })
     
}
window.onload=showMoney()


function mostrarCantidadProductoCarrito(){
  var template=``;
  RestApi.get(`/api/where_total_carrito?idPersona=${localStorage.id}`)   
  .then((data)=>{
    data.forEach(function(prod) {
    
    template =
    `<p>Tienes ${prod.Total_produtos} productos cargadado pendientes para comprar</p>`;
  })
  document.getElementById('getCantCarrito').innerHTML=template;
  })
 
} 

window.onload=mostrarCantidadProductoCarrito()



