function getFooter(){
    footer=``
    footer =`<a class="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
              <span class="glyphicon glyphicon-chevron-up"></span>
              </a><br><br>
             <p>desarrollado por Pablo Vallejos <a href="https:pablovallejos.com" data-toggle="tooltip" title="visita a pablo vallejos">pablovallejos.com</a></p> 
  `
  document.getElementById('getFooter').innerHTML=footer;
}
getFooter()
