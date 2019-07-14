
const isLogged = sessionStorage.user != null
let currentUser =  isLogged ? JSON.parse(sessionStorage.user) : null

get_nav()

function get_nav(){


  const tagNav = document.createElement("nav")
  tagNav.className="navbar navbar-inverse"
  document.getElementById("header").appendChild(tagNav)

  
  const tagDiv=document.createElement("div")
  tagDiv.className="container-fluid"
  tagNav.appendChild(tagDiv)

  const tagDiv1=document.createElement("div")
  tagDiv1.className="navbar-header"
  const tagA = document.createElement("a")
  tagA.className="navbar-brand"
  tagA.href="index.html"
  tagA.innerText="Wine Wine"
  tagDiv1.appendChild(tagA)
  tagDiv.appendChild(tagDiv1)

  const tagUl=document.createElement("ul")
  tagUl.className="nav navbar-nav"
  tagDiv.appendChild(tagUl)

  const tagLi1 = document.createElement("li")
  tagLi1.className="active"
  const tagA1= document.createElement("a")
 tagA1.href="index.html"
  tagA1.innerText="home"
  tagLi1.appendChild(tagA1)
  tagUl.appendChild(tagLi1)

  const tagLi2 = document.createElement("li")
  tagLi2.className="none"
  const tagA2= document.createElement("a")
 tagA2.href="wine.html"
  tagA2.innerText="vinos"
  tagA2.id="vinos"
  tagLi2.appendChild(tagA2)
  tagUl.appendChild(tagLi2)

  const tagLi3 = document.createElement("li")
  tagLi3.className="none"
  const tagA3= document.createElement("a")
  tagA3.href="whiskey.html"
  tagA3.innerText="whiskey"
  tagA3.id="whiskey"
  tagLi3.appendChild(tagA3)
  tagUl.appendChild(tagLi3)

  const tagLi4 = document.createElement("li")
  tagLi4.className="none"
  const tagA4= document.createElement("a")
  tagA4.href="cerveza.html"
  tagA4.innerText="cerveza"
  tagA4.id="cerveza"
  tagLi4.appendChild(tagA4)
  tagUl.appendChild(tagLi4)

  ////
  
  const tagUl1= document.createElement("ul")
  tagUl1.className="nav navbar-nav navbar-right"
  tagUl1.style.paddingRight="31px"
  tagDiv.appendChild(tagUl1)

  const tagLi5 = document.createElement("li")
  tagLi5.className="none"
  const tagA5= document.createElement("a")
  if (isLogged) {
    tagA5.href="panel.html"
    tagA5.innerText= currentUser.username+" " 
    const tagSpan= document.createElement("span")
    tagSpan.className="glyphicon glyphicon-user"
    tagA5.appendChild(tagSpan)
    tagLi5.appendChild(tagA5)
    tagUl1.appendChild(tagLi5)
  }
  
  //
 
  const tagLi6 = document.createElement("li")
  tagLi6.className="dropdown"
  const tagA6= document.createElement("a")
  //tagA6.href="#"
  
  
  const tagSpan1 = document.createElement("span")
//  tagSpan1.className= "glyphicon glyphicon-user"
 // tagA6.appendChild(tagSpan1)
  tagA6.className="dropdown-toggle"
  tagA6.setAttribute("data-toggle","dropdown")
  tagA6.setAttribute( "role","button")
  tagA6.setAttribute( "aria-haspopup","true")
  tagA6.setAttribute( "aria-expanded","false")
  
  const tagSpan2 = document.createElement("span")
  tagSpan2.className= "caret"
  tagA6.appendChild(tagSpan2)
  tagLi6.appendChild(tagA6)
  tagUl1.appendChild(tagLi6)

 
  const tagUl2 = document.createElement("ul")
  tagUl2.className="dropdown-menu"
  tagLi6.appendChild(tagUl2)

  if (isLogged) {
    
    
  const tagLi9 = document.createElement("li")
  tagLi9.className="none"
  const tagA9= document.createElement("a")
  tagA9.innerText="Salir"
  tagLi9.appendChild(tagA9)
  tagUl2.appendChild(tagLi9)

  tagA9.onclick=function(){
    sessionStorage.clear()
    window.location.href='index.html'}


}
else
{
  const tagLi7 = document.createElement("li")
  tagLi7.className="none"
  const tagA7= document.createElement("a")
  tagA7.href="login.html"
  tagA7.innerText="Login"
  tagLi7.appendChild(tagA7)
  tagUl2.appendChild(tagLi7)

  const tagLi8 = document.createElement("li")
    tagLi8.className="none"
    const tagA8= document.createElement("a")
    tagA8.href="registro.html"
    tagA8.innerText="registrate"
    tagLi8.appendChild(tagA8)
    tagUl2.appendChild(tagLi8)
   
}

  
if (isLogged)
{
  tagA6.innerText=" Logout "//currentUser.username
  tagSpan1.className="glyphicon glyphicon-log-out" //"glyphicon glyphicon-user"  
}
else{
  tagA6.innerText=" Login "
  tagSpan1.className="glyphicon glyphicon-log-in"
}
  
tagA6.appendChild(tagSpan1)
 
}

