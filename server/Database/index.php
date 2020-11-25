<?php
$server = '';
$username = '';
$password = '';
$database = '';

try{
    $conn = new PDO("mysql:host=$server;dbname=$databse;", $username, $password);
    echo "Connessione eseguita con succcesso.";
} catch(PDOException $e){
    die("Connessione fallita:" . $e->getMessage());
}