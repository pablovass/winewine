//window.addEventListener("load",function (){
//Identificador es el tipo = 1 para vino ,2 para whiskey 3 para cerveza 
document.getElementById('vino').addEventListener('click',getIdentificadorVino);

var whi= document.getElementById('whiskey')
whi.addEventListener('click',getIdentificadorWhiskey);

var beer =document.getElementById('cerveza')
beer.addEventListener('click',getIdentificadorCerveza);

//la funcion tiene que devolver 

function getIdentificadorVino(){
    tipo=1
return(tipo)  
}

function getIdentificadorWhiskey(){
    var tipo=2
    return (console.log(tipo))
}
function getIdentificadorCerveza(){
    var tipo=3
    return (console.log(tipo))
}

RestApi.get("../api/filter?category=1&max=6")
        .then((products)=>{
            products.forEach((prod)=>{
                console.log(prod)
            })
        })
        //tbody.appendChild(createRow(prod))

 //})
