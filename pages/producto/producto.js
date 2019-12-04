//NO LO ESTOY USANDO 2019 

class Producto{
    constructor(id,nombre,descripcion,precio,cant_producto,tipo){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cant_producto=cant_producto;
        this.tipo=tipo;
    }

}
//GET
function getOneProduct(id,tipo){
    let identificador=id
    let tipos=tipo 
    RestApi.get(`/api/filter2?tipo=${tipos}&id=${identificador}`)
          .then((msg)=> console.log(msg))
          .catch((err)=>console.error(err))
}


function getManyproduct(tipo,max){
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
                    <div class="thumbnail">
                    <a href="http://localhost/producto_detalle.html?id=${prod.id}"><img src="/images/${prod.id}.jpg" alt="${prod.nombre}" width="400" height="300"></a>
                      <p><strong>${prod.nombre}</strong></p>
                      <p><strong>$ ${prod.precio}</strong></p>
                    <!-- esta tachado  <p>${prod.descripcion}</p>-->
                      <button class="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
                    </div>
                  </div>

                `;
            });
            document.getElementById('bebidass').innerHTML=productos;
                  
        })
     
}



function headerProduct(){
    var introHtml=``;

    introHtml += `
            <div id="listasBebidas" class="bg-1">
            <div class="container">
              <h3 class="text-center">whiskey</h3>
              <p class="text-center">la seleccion de la <b> semanab</b></p>
              <div class="row text-center" id="bebidass">
        
                
                
              </div>
            <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default">ver mas </button>
            </div>
              </div>
              </div>
              </div>
               
                 
                 `;  
      
    document.getElementById('lista').innerHTML=introHtml;
}
