
class Producto{

    constructor(id,nombre,descricion,precio,cantProducto,tipo){
        this.id=id;
        this.nombre=nombre;
        this.descricion=descricion;
        this.precio=precio;
        this.cantProducto=cantProducto;
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
            const product=new Producto(data.id,data.nombre,data.descripcion,data.precio,data.cantProducto,data.tipo)
             
            console.log(product.precio)
            
         });
         
        
     })
    }

 allProduct()
 