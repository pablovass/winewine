const nameInput = document.getElementById("productName")
const priceInput = document.getElementById("productPrice")
const saveButton = document.getElementById("saveProduct")

//Verifica si existe el parametro "edit" en la URL actual
const isEditMode = !!URLParams.edit


if(isEditMode){
//Si está en modo edicion...

//  URLParams.edit contiene el id para editar
RestApi.get("/api/product" + URLParams.edit)
  .then((prod)=>{
    nameInput.value = prod.nombre
    priceInput.value = prod.precio
  })
  .catch((err)=>{
    // en caso de error...
    alert("Error al acceder al producto : " + err)
  })

saveButton.addEventListener("click",()=>{ //ante el evento de click
    // creo un objeto prodcuto con los valores de los inputs para su envio
    const product = {
      name : nameInput.value,
      price : parseFloat(priceInput.value)
    }

    console.log("Actualizando el prodcuto el producto " + URLParams.edit + ":")
    console.log(product)

    // utilizo la api para realizar un put enviando el objeto a actualizar
    RestApi.put("/api/product" + URLParams.edit ,product)
      .then((json)=>{
        //En caso de exito en la operación muetro un cartel y reseteo los campos
        alert("Se actualizó con éxito:" + json.msg)

        // Vuelvo a la pagina principal
        document.location.href = "index.html"
      })
      .catch((err)=>{
        // en caso de error...
        alert("Error al actualizar el producto : " + err)
      })
  })

} else {
// Si está en modo creación

saveButton.addEventListener("click",()=>{ //ante el evento de click
    // creo un objeto prodcuto con los valores de los inputs para su envio
    const product = {
      name : nameInput.value,
      price : parseFloat(priceInput.value)
    }

    console.log("Creando el prodcuto :")
    console.log(product)

    // utilizo la api para realizar un post enviando el objeto creado
    RestApi.post("/api/product",product)
      .then((json)=>{
        //En caso de exito en la operación muetro un cartel y reseteo los campos
        alert("producto creado con éxito:" + json.msg)
        nameInput.value = ""
        priceInput.value = 0
      })
      .catch((err)=>{
        // en caso de error...
        alert("Error al crear el producto : " + err)
      })
  })
}
