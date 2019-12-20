
var fechaNow = new Date();

document
.getElementById("cart")
.addEventListener("click",()=>{

  const precio= product.precio
  RestApi.put(`/api/product/${localStorage.id}`,carga)
               .then((prodInfo)=>{
                 console.log("Se actualizo el precio")
               })
  .catch((err)=>{
    alert("Error al carga el nuevo precio")
    console.error(err)
  })
})

