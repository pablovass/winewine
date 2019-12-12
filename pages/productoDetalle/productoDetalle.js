//URLParams.id
//URLParams.tipo

var product =new Producto();

function getProductDetail(id,tipo){
   let elId=id
   let elTipo=tipo
   fetch(`/api/filter2?id=${elId}&tipo=${elTipo}`)   
            .then((res)=>res.json())
            .then((data)=>{
       
              var producto=``;
            
              data.forEach(function(prod) {
               product.id=prod.id;
               product.nombre=prod.nombre;
               product.precio=prod.precio;
               product.tipo=prod.tipo;
               product.descripcion=prod.descripcion;

         producto += `
                      <div class="row content" >
                        <div class="col-sm-8 text-left"> 
                        <br>
                         <div class="well well-lg">
                        <p></p>
                    <img class="img-responsive" src="/images/${prod.id}.jpg" alt="Chania" width="460" height="100" style="padding-right: 0px; margin-left: 94px; "> 
                     <br>
                    <p>${prod.descripcion}</p>
                    </div>
                    <hr>
                    </div>
                    <br><br><br><br>
                    <div class="col-sm-3 sidenav">
                    <h2>${prod.nombre}</h2>
                    <h2>$ ${prod.precio}</h2>
                    <h3>${prod.cant_producto} unidades disponibles</h3>
  
              <div class="well">
                      <button  type="button" class="btn btn-primary"onclick="window.location.href = '../panel/carrito.html';">Comprar</button>
                      <br><br>
                      <button id="carrito" type="button" class="btn btn-primary active" onclick="window.location.href = '../carrito/confirmacionCarrito.html?id=${prod.id}&tipo=${prod.tipo}';">Carrito</button>
              </div>
          
            
            </div>
    </div>
  
                  `;
              });
              
              document.getElementById('getProductDetail').innerHTML=producto;
              return (product)      
          })
          
       }

