<?php

$codigo = $_POST["codigo"];
$descricao = $_POST["descricao"];
$preco = $_POST["preco"];
$comentario = $_POST["comentario"];
$altura = $_POST["altura"];
$largura = $_POST["largura"];
$profundidade = $_POST["profundidade"];

$conexao = mysqli_connect("localhost","root","");
mysqli_select_db($conexao,"webmais");

?>