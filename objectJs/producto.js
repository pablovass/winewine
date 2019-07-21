
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

let uri= 'http://localhost/api/product';
let extension;

function getPost(){
    return fetch('http://localhost/api/product');
}

 function allProduct(){ 
getPost()
    // fetch('/api/product')
     .then((res)=>res.json())
     .then((data)=>{
       
         data.forEach(function(data) {
            const product=new Producto(data.id,data.nombre,data.descripcion,data.precio,data.cant_producto,data.tipo)
             
            console.log(product.cant_producto)
            
         });
         
        
     })
    }

 allProduct()
 