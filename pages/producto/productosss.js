
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
    
    get.forEach(function(prod) {
         
            product += `
                 
                 <div class="col-sm-6 col-md-4">
                   <div class="thumbnail">
                     <img src="/images/${prod.id}.jpg" alt="...">
                     <div class="caption">
                       <h3>${prod.nombre}</h3>
                       <p><b>Oferta $${prod.precio}</b>  <span style="text-decoration: line-through;">Antes $${prod.precio}</span></p>
                       <p><a style="margin-left: 67px;" href="producto_detalle.html?id=${prod.id}" class="btn btn-default" role="button">Comprar</a></p>
                     </div>
                   </div>
                 </div>
               
                 
                 `;  
        
    });
    document.getElementById('product').innerHTML=product;
    

      //  console.log(nombre)
        //console.log(carasteristicas)
    
}



