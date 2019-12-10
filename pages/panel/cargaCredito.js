const btnCargarCredito = document.getElementById("cargarCredito")
const dineroInput = document.getElementById("dinero")


   
document
.getElementById("cargarCredito")
.addEventListener("click",()=>{
  const carga = {
    dinero : dineroInput.value,
    idPersona: user.id
    
  }
  RestApi.put("/api/billetera/1",carga)
    .then((dineroInfo)=>{
      
      window.location.href = "http://localhost/pages/panel/panel.html"
    })
    .catch((err)=>{
      alert("Error al registrar")
      console.error(err)
    })
})



    