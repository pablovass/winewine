const userInput = document.getElementById("username")
const passInput = document.getElementById("password")
const nameInput = document.getElementById("name")
const lastnameInput = document.getElementById("lastname")
const emailInput = document.getElementById("email")

    getUser()
    function cargarDinero(){
      deleteUser()
      

document
.getElementById("addUser")
.addEventListener("click",()=>{
  const user = {
    usuario : userInput.value,
    pass : passInput.value,
    nombre: nameInput.value,
    apellido:lastnameInput.value,
    email: mailInput.value,
    dinero: 1000


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



    }