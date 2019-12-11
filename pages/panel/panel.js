
var dineroUser;

function sayHi(){
    const tagH2= document.createElement("h2")
          tagH2.innerText=`Hola ${localStorage.user} !` 
          document.getElementById('sayHi').appendChild(tagH2).parentNode.nodeName
}

sayHi()

function showMoney(){
    RestApi.get(`http://localhost/api/filterbilletera?idPersona=${localStorage.id}`)   
    .then((data)=>{
      const tagH2= document.createElement("h2")
        tagH2.innerText=`$ ${data[0].dinero} `
        dineroUser= data[0].dinero
        localStorage.setItem('dinero',dineroUser)
        document.getElementById('getShowMoney').appendChild(tagH2).parentNode.nodeName
          user.dinero=data[0].dinero
    });
    return dineroUser
}
showMoney()


function showQuestions(){

}

function askQuestions(){

}


function showPurchases(){

      function getPurchases(tipo,max){
          let category=tipo
          let cant=max 
          
           fetch(`/api/filterxpersona?idpersona=${localStorage.id}`)   
                .then((res)=>res.json())
                .then((data)=>{
           
                  var compras=``;
                
                  data.forEach(function(com) {
                          compras += `
                          <tr>
                          <td>${com.nombre} </td>
                          <td>1/9/2019</td>
                          <td>$5.699,00 x 1 unidad</td>
                          <td><button class="btn" data-toggle="modal" data-target="#myModal" onclick="window.location.href = '/pages/panel/detalleCompra.html';">ver detalle</button></td>
                          </tr>

                   
                      `;
                  });
                  document.getElementById('getPurchases').innerHTML=compras;
                        
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