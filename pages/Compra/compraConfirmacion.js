// is apreta por si 

function getVenta(){

  var aleatorio = Math.round(Math.random()*100);
 
    fetch(`/api/carritoxpersona?persona=${localStorage.id}`)   
             .then((res)=>res.json())
             .then((data)=>{
              var nro_compraA = aleatorio
              
            data.forEach(function(dato) {
               
              const productoCompra=
                 { 
                 id:dato.id,  
                 idProducto:dato.idProducto,
                 idPersona:dato.idPersona,
                 nro_compra:nro_compraA,
                 nombre:dato.nombre,
                 precio:dato.precio,
                 fecha:dato.fecha
               }
               var totalP;
               
              if (parseInt(localStorage.dinero)>dato.precio) {
               totalP= localStorage.dinero-dato.precio 
              }else{
                alert("dinero insuficiente")
                location.href = 'http://localhost';
              }
             totalP= localStorage.dinero-dato.precio
               const carga = {
                dinero : totalP,
                idPersona: localStorage.id
                
              }
               RestApi.put(`/api/billetera/${localStorage.id}`,carga)
               .then((dineroInfo)=>{
                 console.log("plata update")
               })

               RestApi.post("/api/compra",productoCompra)
                 .then((carritoInfo)=>{
                   console.log("se cargo")
               })
                
               RestApi.del(`/api/carrito/${productoCompra.id}`)
                 .then((carritoInfo)=>{
                   console.log("se borro del carrito")
              })
                })
                alert("SU COMPRA SE REALIZO CON EXITO")
               location.href = `http://localhost/pages/compra/compraDetalleRealizada.html?c=${nro_compraA}`;
                 
            })
            
                 
            }