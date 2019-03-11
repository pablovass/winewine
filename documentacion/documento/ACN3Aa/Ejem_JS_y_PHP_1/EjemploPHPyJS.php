<!doctype html>
<html>
    <head>
        <script>
        "use strict"
            
        const json =  <?php 
class Persona{
    public $nombre;
    public $apellido;

    function __construct($nombre,
                $apellido){
        $this->nombre = $nombre;
        $this->apellido = $apellido;
    }
}

$pedro = new Persona("Pedro","Gomez");

echo json_encode($pedro);

        ?>
              
        document.write(json.nombre)
        
        </script>
    </head>
    <body>
        
    </body>
</html>