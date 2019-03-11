<!doctype html>
<html>
    <head>
<script>
        "use strict"
        /* se ejecuta luego de cargarse la pagina */
        window.addEventListener('load',function (){
            /*funcion que crea un elemento LI con un texto adentro*/
            function newLi(text){
                const li = document.createElement("li")
                li.innerText = text
                return li
            }
            /* Elemento con id "principal" */
            const principal = document.getElementById("principal")
            /* Se crea un elemento ul vacio ("flotado") */
            const ul = document.createElement("ul")

            const prods = [{nombre:'remera',precio:20},{nombre:'pantalon',precio:12}]    

            for(let prod of prods){
                ul.appendChild(newLi(prod.nombre))
            }
            /* se agrega el UL dentro del DIV con id "principal" */
            principal.appendChild(ul)
        })
        
           
        </script>
    </head>
    <body>
        <div id="principal">
            
        </div>
        
    </body>
</html>