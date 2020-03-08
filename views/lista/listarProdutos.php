<?php

$conexao = mysqli_connect("localhost","root","","webmais");
//mysqli_select_db($conexao,"webmais");

$sql = "SELECT * FROM produto ORDER BY id ASC";
$query = mysqli_query($conexao,$sql);

while ($linha = mysqli_fetch_array($query)) {
    $output[] = array(
        "id" => $linha['id'],
        "descricao" => $linha['descricao'],
        "preco" => $linha['preco'],
        "comentario" => $linha['comentario'],
        "altura" => $linha['altura'],
        "largura" => $linha['largura'],
        "profundidade" => $linha['profundidade']
    );
}
    echo json_encode($output);

?>