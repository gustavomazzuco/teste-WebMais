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

$select = "SELECT id FROM produto WHERE id = $codigo";
$validacao = mysqli_query($conexao,$select);

$linha = mysqli_fetch_array($validacao);

if ($linha["id"] <> null) {
    echo "Já possui este código Cadastrado!!";
} else {
    $sql = "INSERT INTO produto (id,descricao,preco,comentario,altura,largura,profundidade) VALUES ('$codigo','$descricao','$preco','$comentario','$altura','$largura','$profundidade')";
    mysqli_query($conexao,$sql);
    echo "Salvo com Sucesso!!";
}

?> 