
function getWhiskey(){
<<<<<<< HEAD
  // fetch('/api/product')
   fetch('http://localhost/api/filter?category=2&max=5')
    .then((res)=>res.json())
    .then((data)=>{
     
        let product=''
        console.log(data) //para ver 
      
        data.forEach(function(prod) {
            if (prod.tipo==3) {
             
                product += `
                     
                     <div class="col-sm-6 col-md-4">
                       <div class="thumbnail">
                         <img src="/images/${prod.id}.jpg" alt="...">
                         <div class="caption">
                           <h3>${prod.nombre}</h3>
                           <p><b>Oferta $${prod.precio}</b>  <span style="text-decoration: line-through;">Antes $${prod.precio}</span></p>
                           <p><a style="margin-left: 67px;" href="producto_detalle.html?id=${prod.id}" class="btn btn-default" role="button">Comprar</a></p>
                         </div>
=======
  fetch('http://localhost/api/filter?category=2&max=6')
  .then((res)=>res.json())
  .then((data)=>{
   
      let product=''
      //console.log(data) para ver 
    
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
>>>>>>> 611740898323513248704633b4010f5d99e4c479
                       </div>
                     </div>
                   
                     
                     `;  
            }
        });
         document.getElementById('product').innerHTML=product;
        
       
    })
}
window.onload=getWhiskey