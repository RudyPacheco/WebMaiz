<?php

//peticiones 

//echo "Method HTTP: " .$_SERVER['REQUEST_METHOD'];   

//Registro de niño (doctores)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

//include_once("clases/nino.php");
//include 'buscar_nino.php';
//include 'tabla_peso.php';
//include 'guardar.php';
require_once('configdb.php');



switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
      
        break;
    case 'GET':
       // echo("xxdd");
       if (isset($_GET{'Importancia'})) {
        $db = new Database();
        $con = $db->conectar();
    
        $sql= $con->prepare("SELECT * FROM importancia");
        $sql->execute();
        $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);

     echo json_encode($resultado);

      }else if(isset($_GET{'Alimentacion'})){
         // echo "Retornar Tabla";
         $db = new Database();
         $con = $db->conectar();
     
         $sql= $con->prepare("SELECT * FROM nutricion");
         $sql->execute();
         $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);
         echo json_encode($resultado);
      }else if (isset($_GET{'Nutricion'})) {
        # code...
        echo json_encode("Nutricion");
      }else if (isset($_GET{'Gastronomia'})) {
        # code...
        $db = new Database();
        $con = $db->conectar();
    
        $sql= $con->prepare("SELECT * FROM gastronomia");
        $sql->execute();
        $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resultado);
      
      
      }


       

        break;
    default:
        # code...
        break;
}





?>