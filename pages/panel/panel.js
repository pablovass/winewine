


// logica del panel 

function sayHi(){
    const tagH2= document.createElement("h2")
          tagH2.innerText=`Hola ${localStorage.user} !` 
          document.getElementById('sayHi').appendChild(tagH2).parentNode.nodeName
}
sayHi()

function showMoney(){
    RestApi.get(`http://localhost/api/filterbilletera?idPersona=${localStorage.id}`)   
    .then((data)=>{
      console.log(data)
        const tagH2= document.createElement("h2")
        tagH2.innerText=`$ ${data[0].dinero} ` 
        document.getElementById('getShowMoney').appendChild(tagH2).parentNode.nodeName
          
    });
}
showMoney()

function mostrarFomularioCarGaPlata(){
let formario=``;
formario `<div class="container" >
<h2>cargar credito</h2>
<form action="/action_page.php" style="padding-left: 0px;">
  <div class="form-group">
    <label for="Carga">Cargar:</label>
    <input type="dinero" class="form-control" id="dinero" placeholder="ingrese el monto a carga" name="dinero">
  </div>
  <div class="checkbox">
    <label><input type="checkbox" name="remember">Aceptar los acuerdos y condiciones de la pagina</label>
  </div>
  <button type="submit" class="btn btn-default">Aceptar y Cargar</button>
</form>
</div>`

}
function chargeMoney(){


}

function showQuestions(){

}

function askQuestions(){

}


function showPurchases(){

    function getHeaderList(category){
        var tipo=category
          var headerList=``;
      
          headerList += `
          <div id="whiskeys" class="bg-1">
          <div class="container">
            <h3 class="text-center">whiskey</h3>
            <p class="text-center">la seleccion de la <b> semanab</b></p>
               <div id="getList" class="row text-center"></div>
                <div class="btn-group btn-group-justified" role="group" aria-label="...">
                  <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default" onclick="window.location.href = 'pages/productoLista/productoLista.html?category=${tipo}&max=5';">ver mas </button>
                  </div>
                </div>
          </div>
      </div>`;  
            
          document.getElementById('showListProduct').innerHTML=headerList;
          
      }
      
      function getList(tipo,max){
          let category=tipo
          let cant=max 
          
           fetch(`/api/filter?category=${category}&max=${cant}`)   
                .then((res)=>res.json())
                .then((data)=>{
           
                  var productos=``;
                
                  data.forEach(function(prod) {
                          productos += `
                          
                      <div class="col-sm-4">
                      <div class="thumbnail">
                      <a href="http://localhost/pages/productoDetalle/productoDetalle.html?id=${prod.id}&tipo=${prod.tipo}"><img src="/images/${prod.id}.jpg" alt="${prod.nombre}" /></a>
                        <p><strong>${prod.nombre}</strong></p>
                        <p>${prod.precio}</p>
                        <button class="btn" data-toggle="modal" data-target="#myModal" onclick="window.location.href = 'pages/productoDetalle/productoDetalle.html?id=${prod.id}&tipo=${prod.tipo}';">Buy Tickets</button>
                      </div>
                    </div>
      
                      `;
                  });
                  document.getElementById('getList').innerHTML=productos;
                        
              })
              
           }
      
        
          
          
}
/* EDITARLO */
function showPurchaseDetail(){

    function getHeaderList(category){
        var tipo=category
          var headerList=``;
      
          headerList += `
          <div id="whiskeys" class="bg-1">
          <div class="container">
            <h3 class="text-center">whiskey</h3>
            <p class="text-center">la seleccion de la <b> semanab</b></p>
               <div id="getList" class="row text-center"></div>
                <div class="btn-group btn-group-justified" role="group" aria-label="...">
                  <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default" onclick="window.location.href = 'pages/productoLista/productoLista.html?category=${tipo}&max=5';">ver mas </button>
                  </div>
                </div>
          </div>
      </div>`;  
            
          document.getElementById('showListProduct').innerHTML=headerList;
          
      }
      
      function getList(tipo,max){
          let category=tipo
          let cant=max 
          
           fetch(`/api/filter?category=${category}&max=${cant}`)   
                .then((res)=>res.json())
                .then((data)=>{
           
                  var productos=``;
                
                  data.forEach(function(prod) {
                          productos += `
                          
                      <div class="col-sm-4">
                      <div class="thumbnail">
                      <a href="http://localhost/pages/productoDetalle/productoDetalle.html?id=${prod.id}&tipo=${prod.tipo}"><img src="/images/${prod.id}.jpg" alt="${prod.nombre}" /></a>
                        <p><strong>${prod.nombre}</strong></p>
                        <p>${prod.precio}</p>
                        <button class="btn" data-toggle="modal" data-target="#myModal" onclick="window.location.href = 'pages/productoDetalle/productoDetalle.html?id=${prod.id}&tipo=${prod.tipo}';">Buy Tickets</button>
                      </div>
                    </div>
      
                      `;
                  });
                  document.getElementById('getList').innerHTML=productos;
                        
              })
              
           }
      
        
          
          
}