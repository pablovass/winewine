//NO LO ESTOY USANDO 2019 

class Producto{
    constructor(id,nombre,descripcion,precio,tipo,cant){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.tipo=tipo;
        this.cant=cant;
    }
    get id(){
      return this.i;
      }
      get cant(){
        return this.c;
        }
      get  nombre(){
      return this.name;
      }
      get  descripcion(){
      return this.description;
      }
      get  precio(){
       return this.price;
      }
      get  tipo(){
        return this.type;
       }
      set id (value){
       this.i=value;
      }
      set nombre(value){
        this.name=value;
       }
      set cant(value){
       this.c=value;
      }
      set descripcion(value){
       this.description=value;
      }
      set precio(value){
       this.price=value;
      }
      set tipo(value){
       this.type=value;
      }
      }
      
      
      function getUser(){
        
         let username=(localStorage.user);
         RestApi.get(`http://localhost/api/filteruser?usuario=${username}`)   

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
                      <button class="btn" data-toggle="modal" data-target="#myModal" onclick="window.location.href = 'pages/productoDetalle/productoDetalle.html?id=${prod.id}&tipo=${prod.tipo}';">Buy Tickets</button>
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
