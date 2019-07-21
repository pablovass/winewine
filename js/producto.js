
class Producto{
    
    
    constructor(id,nombre,descripcion,precio,cant_producto,tipo){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cant_producto=cant_producto;
        this.tipo=tipo;
    }
 
}
//getter
var botonCerveza=null
var botonVino=null
var botonWhiskey=null


botonVino= document.getElementById('botonVino')

botonVino.addEventListener('click',function(){
  fetch('../api/filter?category=1&max=5')
    .then(data =>data.json())
    .then(data =>{
         get=data

         mostrarDatos(get)
        })
    })

botonWhiskey= document.getElementById('botonWhiskey')
botonWhiskey.addEventListener('click',function(){
    fetch('../api/filter?category=2&max=5')
      .then(data =>data.json())
      .then(data =>{
           get=data
  
           mostrarDatos(get)
          })
      })
  

botonCerveza=document.getElementById('botonCerveza')
botonCerveza.addEventListener('click',function(){
    fetch('../api/filter?category=3&max=5')
      .then(data =>data.json())
      .then(data =>{
           get=data
  
           mostrarDatos(get)
          })
      })
  

 function mostrarDatos(get){
    get.map((get,i)=>{
        let nombre= get.nombre
        //let carasteristicas=get.descripcion

        console.log(nombre)
        //console.log(carasteristicas)

    })
}



