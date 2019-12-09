const userTag = document.getElementById("username")
const passTag = document.getElementById("password")


  document
  .getElementById("login")
  .addEventListener("click",()=>{
    const usuario = {
      username : userTag.value,
      password : passTag.value
    }
    RestApi.post("/api/login",usuario)
      .then((userInfo)=>{
        sessionStorage.usuario = JSON.stringify(userInfo)
        localStorage.setItem('user',usuario.username)
       
        
        

        window.location.href = "http://localhost/pages/panel/panel.html"
      })
      .catch((err)=>{
        alert("Error al logearse")
        console.error(err)
      })
  })

