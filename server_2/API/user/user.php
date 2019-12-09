<?php
header('Content-Type: application/json');

print_r($_GET);

$cargaCreditoURL= 'http://localhost/API2/user/';
$cargaCreditoJSON = file_get_contents($cargaCreditoURL);
$datos= json_decode($cargaCreditoJSON);

function mostrar_credio(){
credito= array(

);
echo json_encode(mostrar_credio);

}

function guardar_credito(){
  mysql_query("UPDATE usuarios SET DINERO='".$_POST['dinero']."' where id='".$_POST['id']."'");
}