//URLParams.id
//URLParams.tipo


function getProductDetail(id,tipo){
   let elId=id
   let elTipo=tipo
   fetch(`/api/filter2?id=${elId}&tipo=${elTipo}`)   
            .then((res)=>res.json())
            .then((data)=>{
       
              var productos=``;
            
              data.forEach(function(prod) {
                      productos += `
                      <div class="row content" >
    
      <div class="col-sm-8 text-left"> 
       <br>
        <div class="well well-lg">
             
              <p></p>
              <img class="img-responsive" src="/images/1.jpg" alt="Chania" width="460" height="100" style="padding-right: 0px; margin-left: 94px; "> 
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                       aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        
        <hr>
      
      </div>
      <br><br><br><br>
      <div class="col-sm-3 sidenav">
          <h2>Vino Circus Juno Reserva Red Blend 750ml - Berlin Bebidas</h2>
          <h2>$150</h2>
          <h3>21 unidades disponibles</h3>
  
              <div class="well">
                      <button type="button" class="btn btn-primary">Comprar</button>
                      <br><br>
                      <button type="button" class="btn btn-primary active">Carrito</button>
              </div>
          
            
            </div>
    </div>
  
                  `;
              });
              document.getElementById('getList').innerHTML=productos;
                    
          })
          
       }
  