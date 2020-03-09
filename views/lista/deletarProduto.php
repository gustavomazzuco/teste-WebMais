<?php

$id = $_POST["id"];

$conexao = mysqli_connect("localhost","root","");
mysqli_select_db($conexao,"webmais");

$select = "SELECT id FROM produto WHERE id = $id";
$validacao = mysqli_query($conexao,$select);

$linha = mysqli_fetch_array($validacao);

if ($linha["id"] <> null) {
    $query = "DELETE FROM produto WHERE id=$id";
    if (mysqli_query($conexao, $query)) {
        echo 'Deletado com Sucesso!';
    } else {
        echo 'Falha';
    }
} else {
    echo 'Código inexistente!';
}

?>