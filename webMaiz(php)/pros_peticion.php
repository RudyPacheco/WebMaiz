<?php
   require_once('configbd.php');
    
   
   function alimentacion(){

    $db = new Database();
    $con = $db->conectar();

    $sql= $con->prepare("SELECT * FROM importancia");
    $sql->execute();
    $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);

    return $resultado;


}






?>