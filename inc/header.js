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
          <li id="homes"><a href="#home">HOME</a></li>
          <li id="vino"><a href="#vinos">VINOS</a></li>
          <li id="whiskey" ><a href="#whiskeys" >WHISKEY</a></li>
          <li id="cervezas"><a href="#beer">CERVEZA</a></li>
          <li id="contacto"><a href="#contact">CONTACTO</a></li>
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
document.getElementById('getHeader').innerHTML=header;
}
getHeader()