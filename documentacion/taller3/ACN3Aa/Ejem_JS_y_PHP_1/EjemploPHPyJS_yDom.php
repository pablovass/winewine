<!doctype html>
<html>
    <head>
    
<?php
        class Producto{
            public $nombre;
            public $precio;
            
            
            function __construct($nombre,$precio){
                $this -> nombre = $nombre;
                $this -> precio = $precio;
            }
        }
        
        $prod1 = new Producto("Pantalon",250);
        $prod2 = new Producto("Remera",150);
        $prod3 = new Producto("Short",200);
        
        $prods = array($prod1,$prod2,$prod3);       
        $json = json_encode($prods);
?>
<script>
        "use strict"
        /* se ejecuta luego de cargarse la pagina */
        window.addEventListener('load',function (){
            
            
            /*funcion que crea un elemento LI con un texto adentro*/
            function newTd(text){
                const td = document.createElement("td")
                td.innerText = text
                return td
            }
            
            function newTh(text){
                const th = document.createElement("th")
                th.innerText = text
                return th
            }
            /* Elemento con id "principal" */
            const table = document.getElementById("principal")

            const prods = <?php echo $json; ?>    
             const tr = document.createElement("tr")
            tr.appendChild(newTh("Producto"))
            tr.appendChild(newTh("Precio"))
            table.appendChild(tr)
                  
            for(let prod of prods){
                const tr = document.createElement("tr")
                tr.appendChild(newTd(prod.nombre))
                tr.appendChild(newTd(prod.precio))
                table.appendChild(tr)
            }
            /* se agrega el UL dentro del DIV con id "principal" */
            principal.appendChild(table)
        })
        
           
        </script>
        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </head>
    <body>
        <table class="table table-striped" id="principal">
            
        </table>
        
    </body>
</html>