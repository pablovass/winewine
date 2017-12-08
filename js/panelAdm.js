const tagLi = document.createElement("li")
tagLi.className="none"
const tagA= document.createElement("a")

tagA.innerText="Salir"
tagLi.appendChild(tagA)


tagA.onclick=function(){
 sessionStorage.clear()
 window.location.href='index.html'}
document.getElementById("ul").appendChild(tagLi)



let adminVar=sessionStorage
adminVar=JSON.parse(sessionStorage.user)
console.log(adminVar.role)



if(adminVar.role==1) {
 
  console.log("hola admin")
  
  
  
  function adminFuntion(){
   const tagLi1 = document.createElement("li")
   tagLi1.className="none"
   const tagA1= document.createElement("a")
   //class="btn1" data-toggle="modal" data-target="#myModal"
   tagA1.innerText="ver usuarios"
   tagA1.className="btnA"
   tagA1.id="getUser"
   tagA1.setAttribute("data-toggle","collapse")
   tagA1.setAttribute("data-target","#demo")
   tagLi1.appendChild(tagA1)
   document.getElementById("ul").appendChild(tagLi1)
   //
   tagA1.onclick=function getuser(){
    RestApi.get('/api/users')
    
    .then((data)=>{
     
        let usuarios =''
      //  console.log(data) //para ver 
      
        data.forEach(function(user) {
            usuarios += `
            <tr>
            
                <td>${user.id}</td>
                <td>${user.usuario}</td>
               
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.email}</td>
                
            <tr>

                     `;   
            
        });
         document.getElementById("user").innerHTML=usuarios;
        
       
    })
}
    const tagLi2 = document.createElement("li")
    tagLi2.className="none"
    const tagA2= document.createElement("a")
    //tagA2.href="#"
    tagA2.innerText="ver productos"
    tagA2.id="getProd"
    tagA2.setAttribute("data-toggle","collapse")
    tagA2.setAttribute("data-target","#verProd")
    tagLi2.appendChild(tagA2)
    document.getElementById("ul").appendChild(tagLi2)

    tagA2.onclick=function 
                  getProd(){
                  fetch('/api/product')
                  .then((res)=>res.json())
                  .then((data)=>{
                   let productos=''
                   //console.log(data)
                   data.forEach(function(prod) {
                   productos+= `
                        <tr>
                        <td>${prod.id}</td>
                        <td>${prod.nombre}</td>
                        <td>${prod.precio}</td>
                        <td>${prod.carasteristicas}</td>
                        <td>${prod.tipo}</td>
                       </tr>`;  
                    });
                    document.getElementById("prd2").innerHTML=productos 
                   })
                  }
    
    const tagLi3 = document.createElement("li")
    tagLi3.className="none"
    const tagA3= document.createElement("a")
    tagA3.href="#"
    tagA3.innerText="Salir"
    tagLi3.appendChild(tagA3)


//<li ><a class="btn1" data-toggle="modal" data-target="#myModal">Cargar Productos</a></li>
const liCargaP = document.createElement("li")
liCargaP.className="none"
const tagA7= document.createElement("a")
tagA7.className="btn1"
tagA7.setAttribute("data-toggle","modal")
tagA7.setAttribute("data-target","#myModal")
tagA7.innerText="Cargar Productos"

liCargaP.appendChild(tagA7)
document.getElementById("ul").appendChild(liCargaP)
//tagUl1.appendChild(tagLi7)

    }
  }


window.onload=adminFuntion
/*

document.getElementById("ul").appendChild(tagLi3)
 const tagDiv3=document.createElement("div")
 tagDiv3.className="container-fluid"
 document.getElementById("panel").appendChild(tagDiv3)
 
 const tagDiv4=document.createElement("div")
 tagDiv4.className="row content"
 tagDiv3.appendChild(tagDiv4)

 const tagDiv5=document.createElement("div")
 tagDiv5.className="col-sm-3 sidenav hidden-xs"
 tagDiv4.appendChild(tagDiv5)
const tagH2= document.createElement("h2")
tagH2.innerText="Usuario Name"
tagDiv5.appendChild(tagH2)

const tagUl1=document.createElement("ul")
tagUl1.className="nav nav-pills nav-stacked"
tagDiv5.appendChild(tagUl1)


const tagLi4 = document.createElement("li")
tagLi4.className="active"
const tagA4= document.createElement("a")
tagA4.href="#section1"
tagA4.innerText="Tus Consultas"
tagLi4.appendChild(tagA4)
tagUl1.appendChild(tagLi4)

const tagLi5 = document.createElement("li")
tagLi5.className="none"
const tagA5= document.createElement("a")
tagA5.href="#section2"
tagA5.innerText="Gender"
tagLi5.appendChild(tagA5)
tagUl1.appendChild(tagLi5)

const tagLi6 = document.createElement("li")
tagLi6.className="none"
const tagA6= document.createElement("a")
tagA6.href="#section3"
tagA6.innerText="Salir"
tagLi6.appendChild(tagA6)
tagUl1.appendChild(tagLi6)

const tagLi7 = document.createElement("li")
tagLi7.className="none"
const tagA7= document.createElement("a")
tagA7.href="#section4"
tagA7.innerText="Otros"
tagLi7.appendChild(tagA7)
tagUl1.appendChild(tagLi7)
}


*/