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

        window.location.href = "http://localhost/"
      })
      .catch((err)=>{
        alert("Error al logearse")
        console.error(err)
      })
  })

//$("#login").on("click",()=>{
//  const credentials = {
//    "username" : $("#username").value,
//    "password" : $("#password").value
//  }
//
//  RestApi.post("/api/login",credentials)
//  console.log(credentials)
//    .then((msg)=> console.log(msg))
//    .catch((err)=>console.error(err))
//})

