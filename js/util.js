/**
Borra todos los hijos de un elemento HTML
*/
function $_removeChilds(elm){
  while(elm.firstChild){
    elm.removeChild(elm.firstChild)
  }
}


/**
Le asigna funciones utiles a un elemento HTML
*/
function $_elm(elm){
  if(!elm) return elm
  elm.add = (child) => elm.appendChild(child)
  elm.on = (eType,handler) => elm.addEventListener(eType,handler)
  elm.empty = () => $_removeChilds(elm)
  return elm
}

/**
Busca un elemento por CSS selector
*/
//function $(e){
//  return $_elm(document.querySelector(e))
//}
//
/**
Busca varios elementos por CSS selector
*/
function $$(e){
  return $_elm(document.querySelectorAll(e))
}

/**
Crea un elemento con propiedades
*/
function _$(tagName,props){
  const elm = document.createElement(tagName)
  if (props){
    for(let prop in props){
      elm.setAttribute(prop,props[prop])
    }
  }
  return $_elm(child)
}



 //borra por id del html
function deleteIdHtml(id){
  let elID=id
    elID.parentNode.removeChild(id)
  }
function reappearHtml(){
 // document.getElementById("principal").style.display='initial';
  //document.getElementById("lista").style.display='none';
 
}