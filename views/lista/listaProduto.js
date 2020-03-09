var app = angular.module('MyApp');
app.controller('ProdutoListaController', function ($scope, $http) {

    var produtos;

    // $scope.lista = function () {
    //     $.ajax({
    //         type: "GET",
    //         url: "views/lista/listarProdutos.php",
    //         async: false,
    //         success: function (resposta) {
    //             $scope.produtos = resposta;
    //             salvarLista(resposta);
    //         }
    //     });
    // };
    
    $scope.lista = function () {
        $http.get("views/lista/listarProdutos.php")
            .success(function (data) {
                // $scope.produto = data;
                salvarLista(data)
            })
    }

    function salvarLista(lista) {
        produtos = lista;
        $scope.produtos = lista;
    }

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


});

