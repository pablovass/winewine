<?php
session_start();
class Params{
  public function __construct($map)
  {
    $this->map = $map;
  }

  public function getParam($name,$default = null){
    if($this->map != null && isset($this->map[$name])){
      return $this->map[$name];
    } else {
      return $default;
    }
  }
}

class RestApiMensageResponse{
  public $msg;
  public function __construct($msg){
    $this->msg = $msg;
  }
}

class RestApi{

  private $path;
  private $params;
  private $method;
  private $end = false;

  public function __construct(Type $foo = null)
  {
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $parts = parse_url($url);
    if(isset($parts['query']))
    {
        parse_str($parts['query'], $query);
        $this->params = $query;
    }
    $uri = $parts['path'];
    $this->path = explode("/",$uri);
    $this->method = $_SERVER['REQUEST_METHOD'];
  }

  public function process($fMethod,$fPath,$action){

    if($this->end || $this->method != $fMethod){
      return;
    }
    $fPathArr = explode("/",$fPath);
    if(sizeOf($fPathArr) != sizeOf($this->path)){
      return;
    }
    $actionArgs = array();
    for ($i=0; $i < sizeOf($fPathArr) ; $i++) {
      if($fPathArr[$i]  == '?'){
        array_push($actionArgs,$this->path[$i]);
      } else if($fPathArr[$i] != $this->path[$i] ){
        return;
      }
    }
    $params = new Params($this->params);
    $body = json_decode(file_get_contents('php://input'));
    if($fMethod == "GET"){
      array_push($actionArgs,$params);
      array_push($actionArgs,$body);
    } else {
      array_push($actionArgs,$body);
      array_push($actionArgs,$params);
    }

    $this->end = true;
    $ret = call_user_func_array($action,$actionArgs);
    if(is_object($ret) || is_array($ret)){
      echo json_encode($ret);
    } else {
      echo json_encode(new RestApiMensageResponse($ret));
    }
  }

  public function get($fPath,$action){
    $this->process("GET",$fPath,$action);
  }

  public function post($fPath,$action){
    $this->process("POST",$fPath,$action);
  }

  public function put($fPath,$action){
    $this->process("PUT",$fPath,$action);
  }

  public function delete($fPath,$action){
    $this->process("DELETE",$fPath,$action);
  }

  public function isDone(){
    return $this->end;
  }

}

$RestApi = new RestApi();

$__routes = scandir("../routes");
foreach ($__routes as $key => $file) {
  if(substr($file, -9) === "route.php"){
    require "../routes/".$file;
  }
}

if(!$RestApi->isDone()){
  header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
}
?>
