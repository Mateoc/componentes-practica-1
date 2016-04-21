angular
.module('practicaUno', [
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ui.router'
]).config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('mine', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'scripts/main/main.html'
    });

});

