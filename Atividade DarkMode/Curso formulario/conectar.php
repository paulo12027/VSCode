<?php
$host = "localhost";
$usuario = "root";
$senha = ""; // senha padrão do XAMPP/WAMP geralmente é vazia
$banco = "cursos_db";

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
