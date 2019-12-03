
class Producto{
  constructor(){}
  constructor(id,nombre,descripcion,precio,cant_producto,tipo){
      this.id=id;
      this.nombre=nombre;
      this.descripcion=descripcion;
      this.precio=precio;
      this.cant_producto=cant_producto;
      this.tipo=tipo;
      
  }
  //setter and getter 
  set id(value){
      this.id=value;
  }
  get id(){
      return this.id;
  }

  set nombre(value){
      this.nombre=value;
  }
  get nombre(){
      return this.nombre;
  }

  set descripcion(value){
      this.descripcion=value;
  }
  get descripcion(){
      return this.descripcion;
  }

  set precio(value){
      this.precio=value;
  }
  get precio(){
      return this.precio;
  }

  set cant_producto(value){
      this.cant_producto=value;
  }
  get cant_producto(){
      return this.cant_producto;
  }
  set tipo(value){
      this.tipo=value;
  }
  get tipo(){
      return this.tipo;
  }

  //crud
  //get
  mostrarDetalleProducto(){
      fetch(`../api/filter?category=${tipo}&max=${cant_producto}`)
      .then(data =>data.json())
      .then(data =>{
           get=data
  
           mostrarDatos(get)
          })
      console.log("se muestra la lista de los productos del inventario");
  
      console.log("se muestra un detalle del producto seleccionado");
  }
  //get
  mostrarListaProcto(tipo,cant_producto){

      fetch(`../api/filter?category=${tipo}&max=${cant_producto}`)
      .then(data =>data.json())
      .then(data =>{
           get=data
  
           mostrarDatos(get)
          })
      console.log("se muestra la lista de los productos del inventario");
  }

  //post
  cargaDeproducto(){
      console.log("se suma un nuevo producto al inventario");
  }
  //delete
  descontardelInventario(){
      console.log("se resta un producto al inventario");
  }
  //update
  ModificarProducto(){
      console.log("se modifica el producto al inventario");
  }
  
  

}
  class Vino extends Producto{
      constructor(){}
      constructor(id,nombre,descripcion,precio,cant_producto,tipo,tipo_varietal,){
          super(id,nombre,descripcion,precio,cant_producto,tipo);
          this.tipo_varietal=tipo_varietal;
      }
  }

  class Cerveza extends Producto{
      constructor(){}
      constructor(id,nombre,descripcion,precio,cant_producto,tipo,tipo_cerveza){
          super(id,nombre,descripcion,precio,cant_producto,tipo);
          this.tipo_cerveza=tipo_cerveza;
      }
  }
  class Cerveza extends Producto{
      constructor(){}
      constructor(id,nombre,descripcion,precio,cant_producto,tipo,tipo_cerveza){
          super(id,nombre,descripcion,precio,cant_producto,tipo);
          this.tipo_cerveza=tipo_cerveza;
      }
  }

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



