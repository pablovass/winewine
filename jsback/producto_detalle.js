console.log(URLParams.id)


getWine()
function getWine(){
    fetch('/api/product/' + URLParams.id)
    .then((res)=>res.json())
    .then((prod)=>{
     
        let product=''
        //console.log(data) para ver 
      
                
            product += `
            <div class="container">
            <div class="row">
                <div class="col-md-7">  
                    <div><img class="img-responsive" src="/images/${prod.id}.jpg" alt="#"></div>
                </div>    
                <div class="col-md-5">  
                    <div class="about-content">
                        <h1 class="content-title">${prod.nombre}</h1>
                        <p>${prod.carasteristica}</p>
                       <h3><b>Oferta $${prod.precio}</b></h3>
                        <div class="text-left">
                            <a class="btn btn-success button mp-mode="dftl" href="https://www.mercadopago.com/mla/checkout/start?pref_id=286242353-c54ae398-acf6-49c1-86e9-0aab9fda86f9" name="MP-payButton" class='blue-ar-l-rn-none'>Pagar</a>
                            <script type="text/javascript">
                            (function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();
                            </script>  
                            <a href="#" class="btn btn-success button">favoritos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                 
                 `;   
          document.getElementById('contenido').innerHTML=product;
        losOtros(prod)
        });
   
}
function losOtros(prod){
    RestApi.get('/api/filter',{"category":prod.tipo})
    .then((data)=>{
     
        let losOtros=''
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
            `
                   
                     
          
        });
        document.getElementById('contenido2').innerHTML=losOtros;
              
    })
}