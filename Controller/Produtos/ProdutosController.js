app.controller('ProdutosController', ['$scope', function ($scope) {
    $scope.titlePage = 'Cadastro de produtos';

    $scope.form = {
    		name: ""
    	, preco: ""
    }

    var init = function () {
		$scope.produtos = [
						    {name:'Arroz', preco:'10.20'},
						    {name:'Café', preco:'3.40'},
						    {name:'Macarão', preco:'2.80'},
						    {name:'Alface', preco:'2.00'}
				      	  ];
	};

	$scope.addProduto = function(produto){
		console.log($scope.produtos.indexOf(produto));

		produto_index = $scope.produtos.indexOf(produto) || $scope.produtos
		$scope.produtos[produto_index] = $scope.form
	};

	$scope.excluir = function (produto) {
		$scope.produtos.splice($scope.produtos.indexOf(produto),1);
		limpartela();
	};

	$scope.carrgaProduto = function(produto){
		$scope.form.nome = produto.name;
		$scope.form.valor = produto.preco;
	};

	var limpartela =function(){
		$scope.nome = '';
		$scope.valor = '';
	};

	init();
}]);
