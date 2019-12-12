getProductDetail()
var fechaNow = new Date();

  //document
  //.getElementById("carrito")
  //.addEventListener("click",()=>{

const prod = {
  idPersona:localStorage.id,
  idProducto:product.id,
  nombre:product.nombre,
  precio:product.precio,
 // fecha:fechaNow.toLocaleDateString("es-ES")
  }

RestApi.post("/api/carrito",prod)
  .then((carritoInfo)=>{
    window.location.href = "http://localhost/pages/panel/carrito.html"
  })
  .catch((err)=>{
    alert("Error al cargar carrito")
    console.error(err)
  })
//})

window.onload


