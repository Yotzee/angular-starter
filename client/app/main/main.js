'use strict';

(function (angular) {

    mainController.$inject = ['$scope'];
    function mainController($scope) {

    }

    angular.module('AngularStarterApp.Main', [])
        .controller('mainController', mainController)
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('main', {
                        url: '',
                        templateUrl: 'app/main/main.html',
                        controller: 'mainController as mainVM'
                    });
            }]);

})(angular);