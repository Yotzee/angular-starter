'use strict';

(function (angular) {


    secondController.$inject = ['$scope'];
    function secondController($scope) {

    }

    angular.module('AngularStarterApp.MainSecond', [])
        .controller('secondController', secondController)
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('main.second', {
                        url: '/second',
                        templateUrl: 'app/main/second/second.html',
                        controller: 'secondController as secondVM'
                    });
            }]);


})(angular);