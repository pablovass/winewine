
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
                  <a href=index?id=${prod.id}"><img src="/images/${prod.id}.jpg" alt="${prod.nombre}" /></a>
                    <p><strong>${prod.nombre}</strong></p>
                    <p>${prod.precio}</p>
                    <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
                  </div>
                </div>
  
                  `;
              });
              document.getElementById('getList').innerHTML=productos;
                    
          })
          
       }
  
    
      
      