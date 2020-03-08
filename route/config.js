var app = angular.module('MyApp');

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home/home.html'
        })
        .when('/cadastroProduto', {
            templateUrl: 'views/cadastro/cadastroProduto.html',
            controller: 'ProdutoCadastroController'
        })
        .when('/listaProduto', {
            templateUrl: 'views/lista/listaProduto.html',
            controller: 'ProdutoListaController'
        })
        .otherwise("/home");
});