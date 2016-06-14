'use strict';

(function (angular) {


    firstController.$inject = ['$scope'];
    function firstController($scope) {

    }

    angular.module('AngularStarterApp.MainFirst', [])
        .controller('firstController', firstController)
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('main.first', {
                        url: '/first',
                        templateUrl: 'app/main/first/first.html',
                        controller: 'firstController as firstVM'
                    });
            }]);


})(angular);