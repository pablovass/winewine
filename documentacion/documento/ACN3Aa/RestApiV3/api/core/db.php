<?php
// CAMBIAR USUARIO Y CONSTRASEÑA SEGUN CORRESPONDA
define("DB_USERNAME", "user23");
define("DB_PASS", "pass23");
define("DB_DATABASE", "test23");

// Clase que sirve para el mejor control de la la base de datos
class Db{
  private $mysqli;

  public function __construct(){
  }

  /* termina todo y muestra un error */
  function endByError($msg){
    header("HTTP/1.1 500 Internal Server Error");
    echo $msg;
    $this->closeConection();
    exit;
  }

  /* chequea el un estado y en base a eso devuelve un error */
  function chechkError($test,$errorName){
    if($test){
      if(!$errorName){
        $this->endByError(
          "Error al realizar la consulta : (" .
          $this->mysqli->connect_errno .
          ") " .
          $this->mysqli->connect_error );
      } else {
        $this->endByError(
          $errorName .
          " : (" .
          $this->mysqli->connect_errno .
          ") " .
          $this->mysqli->connect_error );
      }

    }
  }

  /* Se conecta con la base de datos */
  function connect (){
    $this->mysqli = new mysqli('127.0.0.1', DB_USERNAME, DB_PASS, DB_DATABASE);
    $this->chechkError($this->mysqli->connect_errno,"Error al conectar con la BD");
  }

  /* ejecuta una query y devuelve el resulset */
  function executeQuery($query){
    if(!$this->mysqli){ /*si no hay conexión*/
      $this->connect();
    }
    $this->chechkError(!$resultado = $this->mysqli->query($query),
      "Error al ejecutar la query [" . $query . "]");
    return $resultado;
  }

  /* devuelve una lista de array asociativos con respecto a una consulta */
  function getList($query){
    $result = $this->executeQuery($query);
    $list = array();
    if($result->num_rows == 0){
      return array();
    }
    while ($row = $result->fetch_assoc()){
      $list[] = $row;
    }
    return $list;

  }

  /* ejecuta una query que espera una sola respuesta */
  function getOneResult($query){
    $result = $this->executeQuery($query);
    if($result->num_rows == 0){
      $this->endByError("No se encontraron resultados");
    } else if ($result->num_rows > 1){
      $this->endByError("Hay mas de un resultado");
    }
    return $result->fetch_assoc();
  }

  /*ciera la coneción*/
  function closeConection(){
    if($this->mysqli){
      $this->mysqli->close();
    }
  }

  /* prepara una consulta precompilada */
  function prepare($query){
    if(!$this->mysqli){ /*si no hay conexión*/
      $this->connect();
    }
    $this->chechkError(!$stm = $this->mysqli->prepare($query)
      ,"Error al realizar la consulta $query");
    return $stm;
  }

  /* ejecuta una consulta precompilada */
  function execute($stm){
    $this->chechkError(!$stm->execute(),
      "Error al agregar los parametros a la consulta");
    $stm->close();
  }

}

$DB = new Db();
 ?>
