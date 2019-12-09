const dineroTag = document.getElementById("dinero")

document
.getElementById("cargarCredito")
.addEventListener("click",()=>{
  const diner = {
     plata: dineroTag.value
  }
       // utilizo la api para realizar un put enviando el objeto a actualizar
        RestApi.put("/api/updatedinero?id=1&",diner)
          .then((dinero)=>{
            //En caso de exito en la operación muetro un cartel y reseteo los campos
            alert("Se actualizó con éxito:" + dinero.msg)
  
            // Vuelvo a la pagina principal
            document.location.href = "http://localhost/pages/panel/panel.html"
          })
          .catch((err)=>{
            // en caso de error...
            alert("Error al actualizar no se cargo el credito : " + err)
          })
      })



    // document
    // .getElementById("addUser")
    // .addEventListener("click",()=>{
    //   const user = {
    //     username : userInput.value,
    //     pass : passInput.value
    //   }
    //   RestApi.post("/api/user",user)
    //     .then((userInfo)=>{
    //       
    //       window.location.href = "http://localhost/pages/login/login.html"
    //     })
    //     .catch((err)=>{
    //       alert("Error al registrar")
    //       console.error(err)
    //     })
    // })
    // 
    //   