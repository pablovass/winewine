<?php

class Person{
    public $name;
    public $age;
    
    function __construct($name,$age){
        $this->name = $name;
        $this->age = $age;
    }
}


if(array_key_exists("person",$_SERVER)){
    $people = json_decode($_SERVER["person"]);
} else {
    $people = array(new Person("Guillermo",30),
                new Person("Pedro",20),
                new Person("Jose",50));
}



if("/api/personas" == $_SERVER['REQUEST_URI']){
    if($_SERVER['REQUEST_METHOD'] == "GET"){
        echo json_encode($people);
    } else  if($_SERVER['REQUEST_METHOD'] == "POST"){
        $obj = json_decode(file_get_contents('php://input'),true);
        // VALIDACIONES
        array_push($people,$obj);
        $_SERVER["person"] = json_encode($people);
        echo json_encode($obj);
    };
} else {
    echo "404";
}