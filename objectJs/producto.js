class Producto{
    constructor(id,nombre,descricion,precio,cantProducto,tipo){
        this.id=id;
        this.nombre=nombre;
        this.descricion=descricion;
        this.precio=precio;
        this.cantProducto=cantProducto;
        this.tipo=tipo;
    }
    //set and get
    // metodos ingresar producto extraer productos

}
//crear una Instacia 
                            //id,nombre,descricion,precio,cantProducto,tipo
//const vino = new Producto('Pablo','Vallejos',01,'pablovass',1500);

function getPost(){
    return fetch('http://localhost/api/product');
}
//###################

 function hola(){ 
getPost()
    // fetch('/api/product')
     .then((res)=>res.json())
     .then((data)=>{
       
         let product=''
         console.log(data) //para ver 
         
         data.forEach(function(prod) {
            console.log(prod.nombre)
            
             /*if (prod.tipo==1) {
              
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
             }*/
         });
       //   document.getElementById('product').innerHTML=product;
         
        
     })
    }
 //window.onload=getPost
 hola()