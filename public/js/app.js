angular
.module('app', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })
    .when('/stocks', {
        templateUrl: 'views/stocks.html',
        controller: 'StockController'
    })
    .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'StockController'
    });;

    $locationProvider.html5Mode(true);
}]);
