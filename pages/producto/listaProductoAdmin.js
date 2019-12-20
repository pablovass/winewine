//me trae el detalle del carrito de la plantilla  
function getProductDetail(){
fetch(`http://localhost/api/filter?category=3`)   
            .then((res)=>res.json())
            .then((data)=>{
              console.log(data)
            var carrito=``

            data.forEach(function(dato) {
        carrito+=`
              <div class="row">
                 <div class="col-sm-3">
                   <div class="well">
                    <img src="/images/${dato.id}.jpg" class="img-circle" height="75" width="75" alt="Avatar">
                   </div>
                 </div>
                 <div class="col-sm-9">
                   <div class="well">
                     <p>${dato.nombre}</p>
                     <p>$ ${dato.precio}<p>
                     <p>lo reservaste 	el ${dato.fecha}	</p>
                     <button id="borrar" type="button" class="btn btn-dark btn-xs" onclick="window.location.href = 'confirmacionEdicionProducto.html?id=${dato.id}&tipo=${dato.tipo}';">editar</button>
                   </div>
                   
                 </div>
               </div>`;
                       
             })
             document.getElementById('getCarrito').innerHTML=carrito;
             
            })
  
        }


getProductDetail()

