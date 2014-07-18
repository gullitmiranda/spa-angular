app.controller('ProdutosController', ['$scope', function ($scope) {
    $scope.titlePage = 'Cadastro de produtos';

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
		if ($scope.produtos.indexOf(produto) != -1) {
			$scope.editar(produto);
		}else{
			$scope.salvar();
		};
	};

	$scope.excluir = function (produto) {
		$scope.produtos.splice($scope.produtos.indexOf(produto),1);
		limpartela();
	};

	$scope.editar = function (produto) {
		$scope.produtos.$put(produto);
		console.log(produto, 'editar');
	};

	$scope.salvar = function(){
		$scope.produtos.push({name: $scope.nome, preco: $scope.valor});
		limpartela();
		console.log(produto, 'salvar');
	};

	$scope.carrgaProduto = function(produto){
		$scope.nome = produto.name;
		$scope.valor = produto.preco;
	};

	var limpartela =function(){
		$scope.nome = '';
		$scope.valor = '';
	};

	init();
}]);