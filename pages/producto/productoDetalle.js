//crea el producto para despues cargarlo al carrito 
var product;

function getProductDetail(){
  // /api/filter2?id=&tipo=
   fetch(`/api/filter2?id=${URLParams.id}&tipo=${URLParams.tipo}`)   
        .then((res)=>res.json())
        .then((data)=>{
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
                   </div>
                   
                 </div>
               </div>`;
                       
             })
             document.getElementById('getProducto').innerHTML=carrito;
             
            })
         }
getProductDetail()