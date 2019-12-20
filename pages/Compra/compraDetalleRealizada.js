//me trae el detalle del carrito de la plantilla  
function getProductDetail(){
  fetch(`/api/filtercompra?persona=${localStorage.id}&nro_compra=${URLParams.c}`)   
              .then((res)=>res.json())
              .then((data)=>{
                console.log(data)
              var carrito=``
              data.forEach(function(dato) {
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
                       <p>compra hecha el ${dato.fecha}	</p>
                       
                     </div>
                     
                   </div>
                 </div>`;
                         
               })
               document.getElementById('getCarrito').innerHTML=carrito;
               
              })
    
          }
  //el total hasta el momento en el carrito 
  function getTotalCompra(){
            fetch(`/api/where_total_compra?nro_compra=${URLParams.c}`)   
             .then((res)=>res.json())
             .then((data)=>{
                var total=``
                data.forEach(function(dato) {
                     total+=
                     `<h2><b>compra total</b></h2>
                      <p><b>unidades ${dato.Total_produtos}</b> </p>
                      <p><b>$ ${dato.Precio_total}</b></p>`;
                      })
                 document.getElementById('getTotalCompra').innerHTML=total;
                })
              }
                getTotalCompra()
  window.onload=getProductDetail()
  
  