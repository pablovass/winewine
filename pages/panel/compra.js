
class Compra{

    constructor(id,idPersona,idProducto1,precio1,cant_producto1,idProducto2,precio2,cant_producto2,idProducto3,precio3,cant_producto3,idProducto4,precio4,cant_producto4,nro_compra,precio_total_compra,cant_producto,fecha){
        this.id=id;
        this.idPersona=idPersona;
        this.idProducto1=idProducto1;
        this.precio1=precio1;
        this.cant_producto1=cant_producto1;
        this.idProducto2=idProducto2;
        this.precio2=precio2;
        this.cant_producto2=cant_producto2;
        this.idProducto3=idProducto3;
        this.precio3=precio3;
        this.cant_producto3=cant_producto3;
        this.idProducto4=idProducto4;
        this.precio4=precio4;
        this.cant_producto4=cant_producto4;
        this.nro_compra=nro_compra;
        this.precio_total_compra=precio_total_compra;
        this.cant_producto=cant_producto;
        this.fecha=fecha
    }
    get id(){
    return this.i;
    }
    get  idPersona(){
    return this.idpersona;
    }
    get  idProducto1(){
    return this.idproducto1;
    }
    get  precio1(){
    return this.price1;
    }
    get  cant_producto1(){
    return this.cant_producto_1;
    }
    get  idProducto2(){
    return this.idproducto2;
    }
    get  precio2(){
    return this.price2;
    }
    get  cant_producto2(){
    return this.cant_producto_2;
    }
    get  idProducto3(){
    return this.idproducto3;
    }
    get  precio3(){
    return this.price3;
    }
    get  cant_producto3(){
    return this.cant_producto_3;
    }
    get  idProducto4(){
    return this.idproducto4;
    }
    get  precio4(){
    return this.price4;
    }
    get  cant_producto4(){
    return this.cant_producto_4;
    }
    get  nro_compra(){
    return this.nrocompra;
    }
    get  precio_total_compra(){
    return this.preciototalcompra;
    }
    get  cant_producto(){
    return this.cantproducto;
    }
    get  fecha(){
    return this.fechas;
    }   
/*SETTERS */            
    set id (value){
    this.i=value;
    }
    
    set idPersona(value){
    this.idpersona=value;
    }
    set idProducto1(value){
    this.idproducto1=value;
    }
    set precio1(value){
    this.price1=value;
    }
    set cant_producto1(value){
    this.cant_producto_1=value;
    }
    set idProducto2(value){
    this.idproducto2=value;
    }
    set precio2(value){
    this.price2=value;
    }
    set cant_producto2(value){
    this.cant_producto_2=value;
    }
    set idProducto3(value){
    this.idproducto3=value;
    }
    set precio3(value){
    this.price3=value;
    }
    set cant_producto3(value){
    this.cant_producto_3=value;
    }
    set idProducto4(value){
    this.idproducto4=value;
    }
    set precio4(value){
    this.price4=value;
    }
    set cant_producto4(value){
    this.cant_producto_4=value;
    }
    set nro_compra(value){
    this.nrocompra=value;
    }
    set precio_total_compra(value){
    this.preciototalcompra=value;
    }
    set cant_producto(value){
    this.cantproducto=value;
    }
    set fecha(value){
    this.fechas=value;
    }
}
var compra =new Compra()

function getCompra(){
            var cont=0;
             RestApi.get(`/api/filterxpersona?idpersona=${localStorage.id}`)   
                  .then((data)=>{
                      console.log(data)
                    data.forEach(function(com) {
                        //Camara Web Webcam Logitech C922 Pro Stream Full Hd +q C920
                        compras += `
                        <tr>
                        <td>${com.nombre} </td>
                        <td>1/9/2019</td>
                        <td>$5.699,00 x 1 unidad</td>
                        <td><button class="btn" data-toggle="modal" data-target="#myModal" onclick="window.location.href = '/pages/panel/detalleCompra.html';">ver detalle</button></td>
                        </tr>

                 
                    `;
                });
                document.getElementById('getPurchases').innerHTML=compras;
                 
                        compra.id=com.id;
                        compra.idPersona=com.idPersona;
                        compra.nro_compra=com.nro_compra;
                        compra.precio_total_compra=com.precio_total_compra;
                        compra.cant_producto=com.cant_producto;
                        compra.fecha=com.fecha;
                       if(com.idProducto1 != null){
                        compra.idProducto1=com.idProducto1;
                        compra.precio1=com.precio1;
                        compra.cant_producto1=com.cant_producto1;
                        }
                        if(com.idProducto2!=null){
                        compra.idProducto2=com.idProducto2;
                        compra.cant_producto2=com.cant_producto2;
                        compra.precio2=com.precio2;
                        }
                        if(com.idProducto3!=null){
                        compra.idProducto3=com.idProducto3;
                        compra.precio3=com.precio3;
                        compra.cant_producto3=com.cant_producto3;
                        }
                        if(com.idProducto4!=null){
                        compra.idProducto4=com.idProducto4;
                        compra.precio4=com.precio4;
                        compra.cant_producto4=com.cant_producto4;
                        }
                        if(com.idProducto5!=null){
                        compra.idProducto5=com.idProducto5;
                        compra.precio5=com.precio5;
                        compra.cant_producto5=com.cant_producto5;
                        
                        }

                          
                        return compra     
                })
            })
            
}

getCompra()

function removeFromFavorites(){

}

function removeFromShoppingCart(){
s
}

function makeThePayment(){
    
}