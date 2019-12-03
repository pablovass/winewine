class Producto{
    constructor(id,nombre,descripcion,precio,cant_producto,tipo){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cant_producto=cant_producto;
        this.tipo=tipo;
    }

}
/*SETTER AND GETTER */ 


//post insert
//setProduct(){
//    console.log("obtener muchos productos")
//} 
//// delete 
//deleteProduct(){
//    console.log("obtener muchos productos")
//}
//// update 
//updateproduct(){
//    console.log("obtener muchos productos")
//}
        

//GET
function getOneProduct(id,tipo){
    let identificador=id
    let tipos=tipo 
    RestApi.get(`/api/filter2?tipo=${tipos}&id=${identificador}`)
          .then((msg)=> console.log(msg))
          .catch((err)=>console.error(err))
}


function getManyproduct(tipo,max){
    let category=tipo
    let cant=max 
    
    RestApi.get(`/api/filter?category=${category}&max=${cant}`)
          .then((msg)=> console.log(msg))
          .catch((err)=>console.error(err))
}
