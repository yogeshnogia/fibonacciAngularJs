//Module
var shr = angular.module('shr', ['ngRoute']);

//Routes
shr.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: "index.html",
            controller: "mainController"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);



//Controllers
shr.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.input = "type a number..";
    $scope.value;
    $scope.btn = "Get Sequence";

    $scope.check = function(value) {

        $scope.a = 0;
        $scope.b = 1;
        $scope.c;
        $scope.result;

        if ($scope.value != undefined && !isNaN($scope.value)) {

            while ($scope.b <= parseInt($scope.value)) {
                if ($scope.c != undefined)
                console.log($scope.c);
                $scope.c = $scope.a + $scope.b;
                $scope.a = $scope.b;
                $scope.b = $scope.c;

            }
        }

    };

}]);