//me muestra el carrito en su estado integro para hacer la compra 

function getProductDetail(){
   fetch(`/api/carritoxpersona?persona=${localStorage.id}`)   
            .then((res)=>res.json())
            .then((data)=>{
              var carrito=``
              var ncompra=parseInt(localStorage.nro_compra)
              
            
              data.forEach(function(dato) {
               console.log(dato)
               const productoCompra=
                { 
                id:dato.id,  
                idProducto:dato.idProducto,
                idPersona:dato.idPersona,
                nro_compra:ncompra+1,
                nombre:dato.nombre,
                precio:dato.precio,
                fecha:dato.fecha
              }
               
              RestApi.post("/api/compra",productoCompra)
                .then((carritoInfo)=>{
                  //window.location.href = "http://localhost/pages/carrito/carrito.html"
                  console.log("se cargo")
                })
              RestApi.del(`/api/carrito/${productoCompra.id}`)
                .then((carritoInfo)=>{
                  console.log("se borro del carrito")
                  //   window.location.href = "http://localhost/pages/carrito/carrito.html"
                 })
               
           carrito+=`
                 <div class="row">
                    <div class="col-sm-3">
                      <div class="well">
                       <img src="/images/${dato.idProducto}.jpg" class="img-circle" height="75" width="75" alt="Avatar">
                      </div>
                    </div>
                    <div class="col-sm-9">
                      <div class="well">
                        <p>${dato.nombre}</p>
                        <p>$ ${dato.precio}<p>
                        <p>lo reservaste 	el ${dato.fecha}	</p>
                      
                      </div>
                      
                    </div>
                  </div>`;
                  
                          
                })
                document.getElementById('getCompra').innerHTML=carrito;
                
                
               })
               localStorage.setItem('nro_compra',ncompra)   
           }
           
   window.onload=getProductDetail()


   function getTotalCompra(){
      
      
   fetch(`/api/where_total_carrito?idPersona=${localStorage.id}`)   
   .then((res)=>res.json())
   .then((data)=>{
 
      var total=``
      data.forEach(function(dato) {
  total+=`<h2><b>compra total</b></h2>
  <p><b>unidades ${dato.Total_produtos}</b> </p>
          <p><b>$ ${dato.Precio_total}</b></p>`;
                 
       })
       document.getElementById('getTotalCompra').innerHTML=total;
      })

  }
  getTotalCompra()
