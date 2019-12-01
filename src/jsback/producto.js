document.getElementById('vino').addEventListener('click',getIdentificadorVino);

var whi= document.getElementById('whiskey')
whi.addEventListener('click',getIdentificadorWhiskey);

var beer =document.getElementById('cerveza')
beer.addEventListener('click',getEspumantes);

//la funcion tiene que devolver 

function getIdentificadorVino(){
    tipo=1
return(tipo)  
}


function getIdentificadorWhiskey(){
    var tipo=2
    return (console.log(tipo))
}
function getIdentificadorCerveza(){
    var tipo=3
    return (console.log(tipo))
}

function getEspumantes(){
    // fetch('/api/product')
    fetch('../api/filter?category=2&max=5')
     .then((res)=>res.json())
     .then((data)=>{
      
         let product=''
         console.log(data) //para ver 
       
         data.forEach(function(prod) {
             if (prod.tipo==2) {
              
                 product += `
                      
                      <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                          <img src="/images/${prod.id}.jpg" alt="...">
                          <div class="caption">
                            <h3>${prod.nombre}</h3>
                            <p><b>Oferta $${prod.precio}</b>  <span style="text-decoration: line-through;">Antes $${prod.precio}</span></p>
                            <p><a style="margin-left: 67px;" href="producto_detalle.html?id=${prod.id}" class="btn btn-default" role="button">Comprar</a></p>
                          </div>
                        </div>
                      </div>
                    
                      
                      `;  
             }
         });
        //  document.getElementById('product').innerHTML = product;
         
        
     })
 }
 window.onload=getEspumantes()