'use strict';


angular.module('practicaUno')
.controller('MainCtrl', ['$scope','giuthubService', function ($scope, giuthubService) {

    $scope.user = 'octocat';

    $scope.getUser = function() {
        giuthubService.getUser($scope.user, {'repos_url':'repos', 'followers_url': 'followers'}).then(function (userInfo) {
            $scope.userInfo = userInfo;
        });
    }
}]);
