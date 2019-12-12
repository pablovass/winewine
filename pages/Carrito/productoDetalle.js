
var tipo = parseInt(URLParams.tipo)
var id=parseInt(URLParams.id)      


function getProductDetail(i,t){
   let ii=i
   let tt=t
   RestApi.get(`/api/filter2?id=${ii}&tipo=${tt}`)   
            //.then((res)=>res.json())
            .then((data)=>{
               console.log(data)
             var  product=
            {
               id:data.id,
               nombre:data.nombre,
               precio:data.precio,
               tipo:data.tipo
            }       
               
              
              return (product)      
          })
          
       }

 
 window.onload=getProductDetail(tipo,id)