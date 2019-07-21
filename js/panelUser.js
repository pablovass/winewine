
function usuario(theUser){
    fetch('/api/users')
    .then((res)=>res.json())
    .then((data)=>{
     
        let product=''
        //console.log(data) para ver 
      
        data.forEach(function(user) {
            if (user.id==theUser) {
             
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
         document.getElementById('product').innerHTML=product;
        
       
    })
  }
  window.onload=getEspumantes




<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Simple Collapsible</h2>
  <p>Click on the button to toggle between showing and hiding content.</p>
  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
  <div id="demo" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</div>

</body>
</html>
