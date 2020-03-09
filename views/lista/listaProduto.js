var app = angular.module('MyApp');
app.controller('ProdutoListaController', function ($scope, $http) {

    console.log('aqui');

    $scope.lista = function () {
        $.ajax({
            type: "GET",
            url: "views/lista/listarProdutos.php",
            success: function (resposta) {
                $scope.produtos = resposta;
                alert($scope.produtos);
            }
        })
    };

    $scope.produtos = [
        {
            "id": 1,
            "descricao": "Teste",
            "preco": 2.50,
            "comentario": "teste",
            "altura": 3,
            "largura": 4,
            "profundidade": 5
        }
    ]

    $scope.deletar = function (id) {
        if (confirm("Deseja mesmo excluir este produto?")) {
            alert(id);
            var data = "id=" + id
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "views/lista/deletarProduto.php",
                data: data,
                success: function (resposta) {
                    alert(resposta);
                    $scope.lista();
                },
                error: function () {
                    alert("Não foi possível excluir o produto.");
                }
            })
        } else {
            return false;
        }
    };

    // $scope.deletar = function(id) {
    //     if (confirm("Deseja mesmo excluir este produto?")) {
    //         $http.post("views/lista/deletarProduto.php", {
    //                 'id': id
    //             })
    //             .success(function(data) {
    //                 alert(data);
    //                 $scope.show_data();
    //             });
    //     } else {
    //         return false;
    //     }
    // }

    // $scope.lista = function () {
    //     $http.get("views/lista/listarProdutos.php")
    //         .success(function (data) {
    //             $scope.produto = data;
    //             alert($scope.produto);
    //         })
    // }

});

