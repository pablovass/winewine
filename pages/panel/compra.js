
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


function getTodosLosTotales(){
    fetch(`/api/todos_los_totales?idPersona=${localStorage.id}`)   
    .then((res)=>res.json())
    .then((data)=>{
        var compra=``;
    
      data.forEach(function(dato) {
        compra+=
        `<tr>
        <td>${dato.nombre} ...</td>
        <td>${dato.fecha}</td>
        <td>$ ${dato.precio_total} x ${dato.total_produtos} unidad</td>
        <td><button class="btn" data-toggle="modal" data-target="#myModal" onclick="window.location.href = '/pages/panel/detalleCompra.html';">ver detalle</button></td>
        </tr>`;
      });
      document.getElementById('getcompras').innerHTML=compra;
            
  })

}

   
 RestApi.get()   
    
    getCompra()

    //getNamesProductos()
    getTodosLosTotales()

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

//<tbody >


function createRow(product){

   // const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    td1.innerText = product.nombre
    document.getElementById('getnombres').appendChild(td1)


    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")

    const addToCartButton = document.createElement("button")
    addToCartButton.innerText = "Agregar al carrito"
    addToCartButton.addEventListener("click",function(){
        addToCart(product)
    })
    tagDiv.className="container-fluid"

    
    td2.innerText = product.precio
    td3.appendChild(addToCartButton)

    
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    return tr
}
//<td><button class="btn" data-toggle="modal" data-target="#myModal" onclick="window.location.href = '/pages/panel/detalleCompra.html';">ver detalle</button></td>