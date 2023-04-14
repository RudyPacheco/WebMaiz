<?php

    class Database {
        private $hostname ="127.0.0.1";
        private $database ="web_maiz";
        private $username ="root";
        private $password="password";


        function conectar(){

            try {
                //code...
                $conexion ="mysql:host=" . $this->hostname ."; dbname=" . $this->database . ";" . 'charset=utf8mb4';

                $options = [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_EMULATE_PREPARES => false
                ];
    
                $pod = new PDO($conexion, $this->username, $this->password, $options);
    
                return $pod;
            } catch (PDOException $e) {
                //throw $th;
                echo 'Error conexion' . $e->getMessage();
                exit;
            }
       


        }
    }



