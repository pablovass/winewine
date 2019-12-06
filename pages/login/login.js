const userTag = document.getElementById("username")
const passTag = document.getElementById("password")


  document
  .getElementById("login")
  .addEventListener("click",()=>{
    const user = {
      username : userTag.value,
      password : passTag.value
    }
    RestApi.post("/api/login",user)
      .then((userInfo)=>{
        sessionStorage.user = JSON.stringify(userInfo)
        localStorage.setItem('name',user.username)

        window.location.href = "http://localhost/pages/panel/panel.html"
      })
      .catch((err)=>{
        alert("Error al logearse")
        console.error(err)
      })
  })

