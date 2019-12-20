//crea el producto para despues cargarlo al carrito 
var product;

function getProductDetail(){
   
   fetch(`/api/filter2?id=${URLParams.id}&tipo=${URLParams.tipo}`)   
        .then((res)=>res.json())
        .then((data)=>{
            data.forEach(function(dato) {
               product=
               {
                  id:dato.id,
                  nombre:dato.nombre,
                  precio:dato.precio,
                  tipo:dato.tipo
               }       
                 });
                 return (product)       
             })
       }

