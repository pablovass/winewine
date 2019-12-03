function mostrarHome(){
    
     home += `
     <!-------------------------------------------------------------------------------------------------->

<div id= "home">

<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="src/images/carusel/carusel_3.jpg" alt="New York" width="1200" height="700">
        <div class="carousel-caption">
          <h3>hacemos cata</h3>
          <p>no solo vandemos sino que una vez por semana nos juntamos a degustar ricos vinos.</p>
        </div>      
      </div>

      <div class="item">
        <img src="src/images/carusel/carusel_1.jpg" alt="Chicago" width="1200" height="700">
        <div class="carousel-caption">
          <h3>La mejor cristaleria</h3>
          <p>No solo se trata de bebidas sino en donde la servimos</p>
        </div>      
      </div>
    
      <div class="item">
        <img src="./src/images/carusel/carusel_2.jpg" alt="Los Angeles" width="1200" height="700">
        <div class="carousel-caption">
          <h3>Las mejores cosechas</h3>
          <p>tenemos desde los vinos mas conocidos hasta las bebidas mas esclusivas</p>
        </div>      
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>
<div id="vinos" class="container text-center">
    <h3>WINE WINE</h3>
    <p><em>POR QUE NOS ENCANTA EL VINO </em></p>
    <p>Porque nos encanta las mejores bebidas es que vendemos lo mejor y no conforme con eso y porque no interesa tus gustos organizamos degustaciones para conocerte y saber que bebidas son las que te acompañan en una reunion, con la familia o un asado con amigos</p>
    <br>
    <!-- las primeras 6 bebidas -->
    <div class="row">
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 1</strong></p><br>
        <a href="#demo" data-toggle="collapse">
          <img src="/src/images/1.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo" class="collapse">
          <p>Guitarist and Lead Vocalist</p>
          <p>Loves long walks on the beach</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 2</strong></p><br>
        <a href="#demo2" data-toggle="collapse">
          <img src="/src/images/2.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo2" class="collapse">
          <p>Drummer</p>
          <p>Loves drummin'</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 3 </strong></p><br>
        <a href="#demo3" data-toggle="collapse">
          <img src="/src/images/3.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo3" class="collapse">
          <p>Bass player</p>
          <p>Loves math</p>
          <p>Member since 2005</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 4</strong></p><br>
        <a href="#demo4" data-toggle="collapse">
          <img src="/src/images/4.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo4" class="collapse">
          <p>Guitarist and Lead Vocalist</p>
          <p>Loves long walks on the beach</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 5</strong></p><br>
        <a href="#demo5" data-toggle="collapse">
          <img src="/src/images/5.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo5" class="collapse">
          <p>Drummer</p>
          <p>Loves drummin'</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 6</strong></p><br>
        <a href="#demo6" data-toggle="collapse">
          <img src="/src/images/6.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo6" class="collapse">
          <p>Bass player</p>
          <p>Loves math</p>
          <p>Member since 2005</p>
        </div>
      </div>
    </div>
    <!--fin  las primeras 6 bebidas -->
    <div class="btn-group btn-group-justified" role="group" aria-label="...">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="window.location.href='http://localhost/src/pages/producto/producto.html'">ver mas </button>
    </div>
      </div>
  <!-- Container (The Band Section) -->
  </div>
  
  <!-- Container (whiskey Section)class="bg-1" -->
  <div id="whiskey" class="bg-1">
    <div class="container">
      <h3 class="text-center">whiskey</h3>
      <p class="text-center">la seleccion de la <b> semanab</b></p>
     
      <div class="row text-center">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="/src/images/7.jpg" alt="Paris" width="400" height="300">
            <p><strong>Paris</strong></p>
            <p>Friday 27 November 2015</p>
            <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="/src/images/8.jpg" alt="New York" width="400" height="300">
            <p><strong>New York</strong></p>
            <p>Saturday 28 November 2015</p>
            <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="/src/images/9.jpg" alt="San Francisco" width="400" height="300">
            <p><strong>San Francisco</strong></p>
            <p>Sunday 29 November 2015</p>
            <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
          </div>
        </div>
      </div>
    
    
      <div class="row text-center">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="/src/images/10.jpg" alt="Paris" width="400" height="300">
            <p><strong>Paris</strong></p>
            <p>Friday 27 November 2015</p>
            <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="/src/images/11.jpg" alt="New York" width="400" height="300">
            <p><strong>New York</strong></p>
            <p>Saturday 28 November 2015</p>
            <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="/src/images/12.jpg" alt="San Francisco" width="400" height="300">
            <p><strong>San Francisco</strong></p>
            <p>Sunday 29 November 2015</p>
            <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
          </div>
        </div>
         </div>
       <div class="btn-group btn-group-justified" role="group" aria-label="...">
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-default" onclick="window.location.href='http://localhost/src/pages/producto/producto.html'">ver mas </button>
    </div>
      </div>
      </div>
      </div>
     
  <!-- Container (The Band Section) -->
     
      <div id="cervezas" class="container text-center">
    
    <p><em>nuestras cervezas  </em></p>
    <p>Porque nos encanta las mejores bebidas es que vendemos lo mejor y no conforme con eso y porque no interesa tus gustos organizamos degustaciones para conocerte y saber que bebidas son las que te acompañan en una reunion, con la familia o un asado con amigos</p>
    <br>
    <!-- las primeras 6 bebidas -->
    <div class="row">
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 1</strong></p><br>
        <a href="#demo" data-toggle="collapse">
          <img src="/src/images/13.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo" class="collapse">
          <p>Guitarist and Lead Vocalist</p>
          <p>Loves long walks on the beach</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 2</strong></p><br>
        <a href="#demo2" data-toggle="collapse">
          <img src="/src/images/14.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo2" class="collapse">
          <p>Drummer</p>
          <p>Loves drummin'</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 3 </strong></p><br>
        <a href="#demo3" data-toggle="collapse">
          <img src="/src/images/15.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo3" class="collapse">
          <p>Bass player</p>
          <p>Loves math</p>
          <p>Member since 2005</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 4</strong></p><br>
        <a href="#demo4" data-toggle="collapse">
          <img src="/src/images/16.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo4" class="collapse">
          <p>Guitarist and Lead Vocalist</p>
          <p>Loves long walks on the beach</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 5</strong></p><br>
        <a href="#demo5" data-toggle="collapse">
          <img src="/src/images/19.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo5" class="collapse">
          <p>Drummer</p>
          <p>Loves drummin'</p>
          <p>Member since 1988</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>vino 6</strong></p><br>
        <a href="#demo6" data-toggle="collapse">
          <img src="/src/images/18.jpg" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo6" class="collapse">
          <p>Bass player</p>
          <p>Loves math</p>
          <p>Member since 2005</p>
        </div>
      </div>
       </div>
       <div class="btn-group btn-group-justified" role="group" aria-label="...">
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-default" onclick="window.location.href='http://localhost/src/pages/producto/producto.html'">ver mas </button>
    </div>
      </div>
    </div>
    <!--fin  las primeras 6 bebidas -->
    
  </div>
    
   
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h4><span class="glyphicon glyphicon-lock"></span> Tickets</h4>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="form-group">
                <label for="psw"><span class="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per person</label>
                <input type="number" class="form-control" id="psw" placeholder="How many?">
              </div>
              <div class="form-group">
                <label for="usrname"><span class="glyphicon glyphicon-user"></span> Send To</label>
                <input type="text" class="form-control" id="usrname" placeholder="Enter email">
              </div>
                <button type="submit" class="btn btn-block">Pay 
                  <span class="glyphicon glyphicon-ok"></span>
                </button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">
              <span class="glyphicon glyphicon-remove"></span> Cancel
            </button>
            <p>Need <a href="#">help?</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
               `;  

  document.write(home);
  
};
 
  mostrarHome()