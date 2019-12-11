
class Compra{

    constructor(id,nro_compra,idPersona,idProducto,nombre,precio,fecha){
        this.id=id;
        this.idPersona=idPersona;
        this.idProducto=idProducto;
        this.nombre=nombre;
        this.precio=precio;
        this.nro_compra=nro_compra;
        this.fecha=fecha
    }
    get id(){
    return this.i;
    }
    get nro_compra(){
    return this.nrocompra;
    }
    get  idPersona(){
    return this.idpersona;
    }
    get  idProducto(){
    return this.idproducto;
    }
    get  nombre(){
    return this.name;
    }
    get  precio(){
    return this.price;
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
    set nro_compra(value){
    this.idproducto=value;
    }
    set idProducto(value){
    this.idproducto=value;
    }
    set nombre(value){
    this.name=value;
    }
    set precio(value){
    this.price=value;
    }
    set fecha(value){
    this.fechas=value;
    }
}
var compra =new Compra()

function getCompra(){

    function getPurchases(tipo,max){
        let category=tipo
        let cant=max 
        
         fetch(`/api/filterxpersona?idpersona=${localStorage.id}`)   
              .then((res)=>res.json())
              .then((data)=>{
         
                var compras=``;
              
                data.forEach(function(com) {
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