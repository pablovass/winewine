
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
    set nro_compra(value){
        this.nrocompra=value;
        }
    get  idPersona(){
    return this.idPersona;
    }
    set idPersona(value){
        this.idpersona=value;
        }

    set idProducto(value){
        this.idproducto=value;
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
    // obtengo el numero de compras 
    
    fetch(`/api/comprapersona?persona=${localStorage.id}`)   
    .then((res)=>res.json())
    .then((data)=>{
       data.forEach(function(data) {
       compra.id=data.id;
       compra.idPersona=data.idPersona;
       compra.idProducto=data.idProducto;
       compra.nombre=data.nombre;
       compra.precio=data.precio;
       compra.nro_compra=data.nro_compra;
       compra.fecha=data.fecha
       localStorage.setItem('nro_compra',compra.nro_compra)
      // console.log(compra)
       
       return compra
       
      });
  })
  
}



function getDifferentNamesAPurchase(){
    
    fetch(`/api/nombres_diferentes_una_compra?nro_compra=${localStorage.nro_compra}`)   
    .then((res)=>res.json())
    .then((data)=>{
        var c;
        data.forEach(function(d) {
        c=d.nombre;
        console.log(c)
      });
  })
}

   
function getPrecioCantTotalCompra(){
 var url=`/api/todos_los_totales?idPersona=${localStorage.id}`
   
fetch(url)   
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            data.forEach(function(data) {
                
                var v1=data.total_produtos
                var v2=data.precio_total
        
                const totalcompra = {
                    preciototal :v1 ,
                    cantproductosTotal :v2 
                  }
                  console.log(totalcompra);
                });
            })
          }
        
    
    getCompra()

    getDifferentNamesAPurchase()
    getPrecioCantTotalCompra()

    //function removeFromFavorites(){
//
//}
//
//function removeFromShoppingCart(){
//
//}
//
//function makeThePayment(){
//    
//}