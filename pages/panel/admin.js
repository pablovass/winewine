function showallProducts(){

}

function showAProducts(){
    
}

function editProduct(){

}

function loadProduct(){

}

function deleteProduct(){

}

function getAdmin(){

    optionAdmin=``

optionAdmin=
`<div class="alert alert-success fade in">
<a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
<p><strong>hola Admin!</strong></p>
Ingresaste como administrador 
</div>
<p><a href="http://localhost/pages/producto/listaProductoAdmin.html">Editar Productos</a></p>
<!--<p><a href="#">Ver Mesajes</a></p>-->
<!--<p><a href="#">Salir</a></p>-->`

document.getElementById('getAdmin').innerHTML=optionAdmin;
              

}


function getCredito(){
    var btnCredito=``
    btnCredito=`
    <button class=".btn-xs btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="window.location.href = '/pages/panel/cargaCredito.html';">Cargar mas</button>
                 `
document.getElementById('getCredito').innerHTML=btnCredito;

}


if(sessionStorage.role == 1){
    getAdmin()
    getCredito()
}


