class Usuario{
    constructor(nombre,apellido,id,userName,dinero){
        this.nombre=nombre;
        this.apellido=apellido;
        this.id=id;
        this.userName=userName;
        this.dinero=dinero;


    }
    //tenemos los metodos de clase
    resgistrarte(){
        console.log(`te estas resgistrando ${this.nombre}`);
    }
    compra(){
        console.log(`estas comprando y te quedan ${this.dinero}`);
    }
    reservarProducto(){
        console.log(`estas reservando un producto y tu id es ${this.id}`);
    }
    //propiedades set and get
    set peso(value){
        this.kgs=value.trim();
    }
    get peso(){
        return this.kgs;
    }

}

//crear una Instacia 
const chico = new Usuario('Pablo','Vallejos',01,'pablovass',1500);
const chica= new Usuario('Laura','Vallejos',02,'lauravass',1500);