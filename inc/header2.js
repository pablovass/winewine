

window.onload=getHeader()

function getHeader(){
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
       <!--   <li id="contacto"><a href="#contact">CONTACTO</a></li>-->
          <li class="dropdown" id="getLogin">
           
      </div>
    </div>
  </nav>
  
`
document.getElementById('getHeader2').innerHTML=header;
}

function getLoginAndRegistro(){

var login =``
login = ` <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost/pages/login/login.html">LOGIN
<span class="caret"></span></a>
<ul class="dropdown-menu">
  <li><a href="http://localhost/pages/registro/registro.html">Registrase</a></li>
  <li><a href="http://localhost/pages/login/login.html">Iniciar Session</a></li>
  <li><a href="http://localhost/logout.html">Cerrar Session</a></li> 
</ul>
</li>
<!-- <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>-->
</ul>`
document.getElementById('getLogin').innerHTML=login;
}

function getPanel(){
   var login =``
  login = ` <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost/pages/panel/panel.html"><div id="sayHi2"></div>
  </a>
  <ul class="dropdown-menu">
    <li><a href="http://localhost/logout.html">Cerrar Session</a></li> 
  </ul>
  </li>
  <!-- <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>-->
  </ul>`
  document.getElementById('getLogin').innerHTML=login;
  }

 // function getLogin3(){
 // 
 //   var logion =``
 //   login = ` <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost/pages/login/login.html">LOGIN
 //   <span class="caret"></span></a>
 //   <ul class="dropdown-menu">
 //     <li><a href="http://localhost/pages/registro/registro.html">Registrase</a></li>
 //     <li><a href="http://localhost/pages/login/login.html">Iniciar Session</a></li>
 //     <li><a href="#">Cerrar Session</a></li> 
 //   </ul>
 //   </li>
 //   <!-- <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>-->
 //   </ul>`
 //   document.getElementById('getLogin').innerHTML=login;
 //   }

if(localStorage.user != null){
      getPanel()
      sayHi2()
}else{
  getLoginAndRegistro()
}


function sayHi2(){
  var sayHi=``;
  sayHi =`${localStorage.user.toUpperCase()}`
  document.getElementById('sayHi2').innerHTML=sayHi;
}

