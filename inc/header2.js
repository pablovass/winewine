// variables de session 
const isLogged = sessionStorage.user != null
let currentUser =  isLogged ? JSON.parse(sessionStorage.user) : null


function getHeader2(){
    var header =``
    header+= `
   
    <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="#home">Wine Wine</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li id="homes"><a href="http://localhost">HOME</a></li>
          <li id="vino"><a href="http://localhost/pages/productoLista/productoLista.html?category=1&max=5">VINOS</a></li>
          <li id="whiskey" ><a href="http://localhost/pages/productoLista/productoLista.html?category=2&max=5" >WHISKEY</a></li>
          <li id="cervezas"><a href="http://localhost/pages/productoLista/productoLista.html?category=3&max=5">CERVEZA</a></li>
          <li id="contacto"><a href="http://localhost/#contact">CONTACTO</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost/pages/login/login.html">LOGIN
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Registrase</a></li>
              <li><a href="#">Iniciar Session</a></li>
              <li><a href="#">Cerrar Session</a></li> 
            </ul>
          </li>
          <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
        </ul>
      </div>
    </div>
  </nav>
  
`
document.getElementById('getHeader2').innerHTML=header;
}
getHeader2()