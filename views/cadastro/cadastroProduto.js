var app = angular.module('MyApp');
app.controller('ProdutoCadastroController', function ($scope, $http) {

    $scope.btnName = "Salvar";
    $('.codigo').mask('#', { reverse: true });
    $('.decimal').mask('#0.00', { reverse: true });

    $("#limpar").click(function () {
        $("#codigo").val('');
        $("#descricao").val('');
        $("#preco").val('');
        $("#comentario").val('');
        $("#largura").val('');
        $("#altura").val('');
        $("#profundidade").val('');
    });

    $(document).ready(function () {
        $("#salvar").click(function () {
            var codigo = $("#codigo").val();
            var descricao = $("#descricao").val();
            var preco = $("#preco").val();
            var comentario = $("#comentario").val();
            var largura = $("#largura").val();
            var altura = $("#altura").val();
            var profundidade = $("#profundidade").val();

            alert($scope.btnName);

            if (codigo == "") {
                alert("Informe o Código do Produto!!");
            } else if (descricao == "") {
                alert("Informe a Descrição do Produto!!");
            } else if (preco == "") {
                alert("Informe o Preço do Produto!!");
            } else if (comentario == "") {
                alert("Informe um comentário do Produto!!");
            } else if (altura == "") {
                alert("Informe a Altura do Produto!!");
            } else if (largura == "") {
                alert("Informe a Largura do Produto!!");
            } else if (profundidade == "") {
                alert("Informe a Altura do Produto!!");
            } else {

                var data = "codigo=" + codigo + "&descricao=" + descricao + "&preco=" + preco + "&comentario=" + comentario + "&largura=" + largura + "&altura=" + altura + "&profundidade=" + profundidade + "&botao=" + $scope.btnName;
                console.log('aqui');
                event.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "views/cadastro/salvarProduto.php",
                    data: data,
                    beforeSend: function () {
                        $("#resultado").css('display', 'block');
                    },
                    success: function (result) {
                        alert(result);
                    },
                    error: function () {
                        alert("Não foi possível salvar produto.");
                    },
                    complete: function () {
                        $("#resultado").css('display', 'none');
                        $("#codigo").val('');
                        $("#descricao").val('');
                        $("#preco").val('');
                        $("#comentario").val('');
                        $("#largura").val('');
                        $("#altura").val('');
                        $("#profundidade").val('');
                    }

                })
            };
        });
    });

    $scope.editar = function (id, descricao, preco, comentario, altura, largura, profundidade) {
        // $scope.id = id;
        // $scope.descricao = descricao;
        // $scope.preco = preco;
        // $scope.comentario = comentario;
        // $scope.altura = altura;
        // $scope.largura = largura;
        // $scope.profundidade = profundidade;
        $("#codigo").val(id);
        $("#descricao").val(descricao);
        $("#preco").val(preco);
        $("#comentario").val(comentario);
        $("#largura").val(altura);
        $("#altura").val(largura);
        $("#profundidade").val(profundidade);
        $scope.btnName = "Editar";
    }

});