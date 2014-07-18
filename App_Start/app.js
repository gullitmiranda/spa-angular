var app = angular.module('app', ['ngRoute', 'ngResource', 'ngCookies']);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../View/Home/index.html',
            controller: 'HomeController'
        })
        .when('/Produto',{
        	templateUrl: '../View/Produtos/index.html',
        	controller: 'ProdutosController'
        })
        // se não for encontrado a rota sera redirecionado para a Pagina Inicial
        .otherwise({
            redirectTo: '/'
        });
}]);