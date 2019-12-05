const userInput = document.getElementById("username")
const passInput = document.getElementById("password")


document
.getElementById("addUser")
.addEventListener("click",()=>{
  const user = {
    username : userInput.value,
    pass : passInput.value
  }
  RestApi.post("/api/user",user)
    .then((userInfo)=>{
      
      window.location.href = "http://localhost/pages/login/login.html"
    })
    .catch((err)=>{
      alert("Error al registrar")
      console.error(err)
    })
})

  