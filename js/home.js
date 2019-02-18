
//index.html
getProductos()
let pd=""
function getProductos(){
    fetch('../api/filter?category=1&max=6')
    .then((res)=>res.json())
    .then((data)=>{
     
        let productos=''
        //console.log(data) para ver 
      
        data.forEach(function(prod) {
            if (prod.tipo==1) {
             
            productos += `
            <div class="col-sm-4">
            <div class="panel panel-primary">
                <div class="panel-heading">${prod.nombre}</div>
                <div class="panel-body"><a href="producto_detalle.html?id=${prod.id}"><img src="images/${prod.id}.jpg" class="img-responsive" style="width:30%  height=30%" alt="Image"></a></div>
                <div class="panel-footer" style="text-align:center"><b>$${prod.precio}</b></div>
            </div>
           </div>
        
            `;  
            pd=0 
            }
        });
     document.getElementById('productos').innerHTML=productos
        
       
    })
}
