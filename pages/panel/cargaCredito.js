const btnCargarCredito = document.getElementById("cargarCredito")
var dineroInput = document.getElementById("dinero")

   
document
.getElementById("cargarCredito")
.addEventListener("click",()=>{
  var uno=parseInt(dineroInput.value)
  var dos =parseInt(localStorage.dinero)
 var total = uno + dos  
 
  const carga = {
    dinero : total,
    idPersona: user.id
    
  }
  RestApi.put(`/api/billetera/${localStorage.id}`,carga)
    .then((dineroInfo)=>{
      
      window.location.href = "http://localhost/pages/panel/panel.html"
    })
    .catch((err)=>{
      alert("Error al cargar credito")
      console.error(err)
    })
})



    