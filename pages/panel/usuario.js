function getUser(){
    let idUser=4;
    fetch(`http://localhost/api/user/${idUser}`)   
    .then((res)=>res.json())
    .then((data)=> console.log(data)
         
  )
}

function  makePurchese(){

}
function uploadToShoppingCart(){

}

function uploadToFavorites(){
    
}

