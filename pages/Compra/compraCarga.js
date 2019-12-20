
var fechaNow = new Date();

document
.getElementById("cart")
.addEventListener("click",()=>{
const prod = {
  idPersona:localStorage.id,
  idProducto:product.id,
  nombre:product.nombre,
  precio:product.precio,
  fecha:fechaNow.toLocaleDateString("es-ES")
  }

RestApi.post("/api/carrito",prod)
  .then((carritoInfo)=>{
    window.location.href = "http://localhost/pages/carrito/carrito.html"
  })
  .catch((err)=>{
    alert("Error al cargar carrito")
    console.error(err)
  })
})

// porner un for dentro de otro
