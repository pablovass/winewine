function getPrecioCantTotalCompra(){
    var url=`/api/where_total_compra?nro_compra=${compra.nro_compra}`
    RestApi.get(url)   
   // .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        var v1=data[0].Total_produtos
        var v2=data[0].Precio_total

        const totalcompra = {
            precioTotal :v1 ,
            cantProductosTotal :v2 
          }
        console.log(totalcompra);

       
  })
}
getPrecioCantTotalCompra()