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

    // $scope.lista = function () {
    //     $http.get("views/lista/listarProdutos.php")
    //         .success(function (data) {
    //             $scope.produto = data;
    //             alert($scope.produto);
    //         })
    // }

});

