const userTag = document.getElementById("username")
const passTag = document.getElementById("password")


document
  .getElementById("login")
  .addEventListener("click",()=>{
    var credentials = {
      username : userTag.value,
      password : passTag.value
    }
    RestApi.post("/api/login",credentials)
      .then((userInfo)=>{
        console.log(userInfo)
        sessionStorage.credentials = JSON.stringify(userInfo)
        sessionStorage.setItem('user',userTag.value)

        window.location.href = "http://localhost/pages/panel/panel.html"
      })
      .catch((err)=>{
        alert("Error al logearse")
        console.error(err)
      })
  })



