


// logica del panel 

function sayHi(){
    const tagH2= document.createElement("h2")
          tagH2.innerText=`Hola ${currentUser.username} !` 
          document.getElementById('getNav').appendChild(tagH2).parentNode.nodeName
}
sayHi()