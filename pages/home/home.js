function getCarrusel(){
    let carrusel=``;
    carrusel+=`<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
  
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="/images/carusel/carusel_3.jpg" alt="New York" width="1200" height="700">
        <div class="carousel-caption">
          <h3>hacemos cata</h3>
          <p>no solo vandemos sino que una vez por semana nos juntamos a degustar ricos vinos.</p>
        </div>      
      </div>
  
      <div class="item">
        <img src="/images/carusel/carusel_1.jpg" alt="Chicago" width="1200" height="700">
        <div class="carousel-caption">
          <h3>La mejor cristaleria</h3>
          <p>No solo se trata de bebidas sino en donde la servimos</p>
        </div>      
      </div>
    
      <div class="item">
        <img src="/images/carusel/carusel_2.jpg" alt="Los Angeles" width="1200" height="700">
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
  </div>`
  document.getElementById('myCarrusell').innerHTML=carrusel;
}


function headerlistOne(){
    var headerlist=``;

    headerlist += `
    <div id="vinos" class="container text-center">
    <h3>WINE WINE</h3>
     <p><em>POR QUE NOS ENCANTA EL VINO </em></p>
      <p>
      Porque nos encanta las mejores bebidas es que vendemos lo mejor y no conforme con eso y porque no interesa tus 
      gustos organizamos degustaciones para conocerte y saber que bebidas son las que te acompañan en una reunion, con la familia o un asado con amigos
      </p>
      <br>
      <div id="getListOne" class="row"></div>
       <!--aca dentro va los productos --->     
   
   <div class="btn-group btn-group-justified" role="group" aria-label="...">
     <div class="btn-group" role="group">
         <button type="button" class="btn btn-default" id="getVinos">ver mas </button>
     </div>
   </div>
</div>`;  
      
    document.getElementById('headerlistOne').innerHTML=headerlist;
    
}

function getListOne(tipo,max){
    let category=tipo
    let cant=max 
    
    //RestApi.get(`/api/filter?category=${category}&max=${cant}`)
          //.then((msg)=> console.log(msg))
     fetch(`/api/filter?category=${category}&max=${cant}`)   
          .then((res)=>res.json())
          .then((data)=>{
     
            var productos=``;
            //console.log(data) para ver 
          
            data.forEach(function(prod) {
                    productos += `
                    <div class="col-sm-4">
                    <p class="text-center"><strong>${prod.nombre}</strong></p><br>
                    <a href="#demo" data-toggle="collapse">
                    <a href="http://localhost/producto_detalle.html?id=${prod.id}">  <img src="/images/${prod.id}.jpg" class="img-circle person" alt="${prod.nombre}" width="255" height="255"></a>
                    </a>
                    <div id="demo" class="collapse">
                      
                      <!-- esta tachado  <p>${prod.descripcion}</p>-->
                      <p><strong>$ ${prod.precio}</strong></p>
                    </div>
                  </div>

                `;
              
            });
            document.getElementById('getListOne').innerHTML=productos;
                  
        })
        
}

function mostrarListaUno(){
    headerlistOne()
    getListOne(1,6)

}
function headerlistTwo(){
    var headerList=``;

    headerList += `
    <div id="whiskey" class="bg-1">
    <div class="container">
      <h3 class="text-center">whiskey</h3>
      <p class="text-center">la seleccion de la <b> semanab</b></p>
         <div id="listagetListTwo" class="row text-center"></div>
          <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">ver mas </button>
            </div>
          </div>
    </div>
</div>`;  
      
    document.getElementById('headerlistTwo').innerHTML=headerList;
    
}
function getListTwo(tipo,max){
    let category=tipo
    let cant=max 
    
     fetch(`/api/filter?category=${category}&max=${cant}`)   
          .then((res)=>res.json())
          .then((data)=>{
     
            var productos=``;
            //console.log(data) para ver 
          
            data.forEach(function(prod) {
                    productos += `
                    
                <div class="col-sm-4">
                <div class="thumbnail">
                <a href="http://localhost/producto_detalle.html?id=${prod.id}"><img src="images/${prod.id}.jpg" alt="${prod.nombre}" /></a>
                  <p><strong>${prod.nombre}</strong></p>
                  <p>${prod.precio}</p>
                  <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
                </div>
              </div>

                `;
            });
            document.getElementById('listagetListTwo').innerHTML=productos;
                  
        })
     }

     function mostrarListaDos(){
        headerlistTwo()
        getListTwo(2,6)
    
    }

function headerlistThree(){
    var introHtml=``;

    introHtml += ` 
    <div id="cervezas" class="container text-center">
        <h3>WINE WINE</h3>
         <p><em>POR QUE NOS ENCANTA EL VINO </em></p>
          <p>
          Porque nos encanta las mejores bebidas es que vendemos lo mejor y no conforme con eso y porque no interesa tus 
          gustos organizamos degustaciones para conocerte y saber que bebidas son las que te acompañan en una reunion, con la familia o un asado con amigos
          </p>
          <br>
          <div id="listagetListThree" class="row"></div>
           <!--aca dentro va los productos --->     
       
       <div class="btn-group btn-group-justified" role="group" aria-label="...">
         <div class="btn-group" role="group">
             <button type="button" class="btn btn-default" id="getVinos">ver mas </button>
         </div>
       </div>
    </div>
`;  
      
    document.getElementById('headerlistThree').innerHTML=introHtml;
    
}



function getListThree(tipo,max){
    let category=tipo
    let cant=max 
    
    //RestApi.get(`/api/filter?category=${category}&max=${cant}`)
          //.then((msg)=> console.log(msg))
     fetch(`/api/filter?category=${category}&max=${cant}`)   
          .then((res)=>res.json())
          .then((data)=>{
     
            var productos=``;
            //console.log(data) para ver 
          
            data.forEach(function(prod) {
                    productos += `
                    <div class="col-sm-4">
                        <p class="text-center"><strong>${prod.nombre}</strong></p><br>
                        <a href="#demo" data-toggle="collapse">
                        <a href="http://localhost/producto_detalle.html?id=${prod.id}"><img src="images/${prod.id}.jpg" class="img-circle person" alt="Random Name" width="255" height="255"></a>
                         </a>
                            <div id="demo" class="collapse">
                            <p>${prod.precio}</p>
                            <!-- esta tachado  <p>${prod.descripcion}</p>-->
                             <!--<p>Member since 1988</p>-->
                         </div>
                    </div>`;
            });
            document.getElementById('listagetListThree').innerHTML=productos;
                  
        })
  
}

function mostrarListaTres(){
    headerlistThree()
    getListThree(3,6)

}