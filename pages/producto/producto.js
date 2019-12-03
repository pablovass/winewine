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
/*SETTER AND GETTER */ 


//post insert
//setProduct(){
//    console.log("obtener muchos productos")
//} 
//// delete 
//deleteProduct(){
//    console.log("obtener muchos productos")
//}
//// update 
//updateproduct(){
//    console.log("obtener muchos productos")
//}
        

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
     
            var losOtros=''
            //console.log(data) para ver 
          
            data.forEach(function(prod) {
                    losOtros += `
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="blog-post wow fadeInUp" data-wow-delay="0.2s">
                                <div class="post-img">
                                <a href="http://localhost/producto_detalle.html?id=${prod.id}"> <img class="img-responsive" src="/images/${prod.id}.jpg" alt="image"></a>
                                </div>    
                                <div class="blog-details">
                                <h4 class="media-heading">${prod.nombre}</h4>
                                <p>${prod.carasteristica}.</p>
                                <ul class="list-inline text-capitalize">
                                <li><b>Oferta $${prod.precio}</b></li>
                                <li class="pull-right"><span style="text-decoration: line-through;">Antes $${prod.precio}</span></li>
                            </ul>
                        </div>
                    </div>    
                </div>   
                `;
            });
            document.getElementById('contenido2').innerHTML=losOtros;
                  
        })
        //  .catch((err)=>console.error(err))
}

/************************************************************************************/


//function mostrarDatos(msg){
//    
//    msg.forEach(function(prod) {
//         
//            product += `
//                 
//                 <div class="col-sm-6 col-md-4">
//                   <div class="thumbnail">
//                     <img src="/images/${id}.jpg" alt="...">
//                     <div class="caption">
//                       <h3>${nombre}</h3>
//                       <p><b>Oferta $${precio}</b>  <span style="text-decoration: line-through;">Antes $${precio}</span></p>
//                       <p><a style="margin-left: 67px;" href="producto_detalle.html?id=${id}" class="btn btn-default" role="button">Comprar</a></p>
//                     </div>
//                   </div>
//                 </div>
//               
//                 
//                 `;  
//        
//    });
//    document.getElementById('product').innerHTML=product;
//    
//
//      //  console.log(nombre)
//        //console.log(carasteristicas)
//    
//}

/************************************************************************************/

//botonCerveza=document.getElementById('botonCerveza')
//botonCerveza.addEventListener('click',function(){
//    fetch('../api/filter?category=3&max=5')
//      .then(data =>data.json())
//      .then(data =>{
//           get=data
//  
//           mostrarDatos(get)
//          })
//      })
//  
//