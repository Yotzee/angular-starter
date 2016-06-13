'use strict';

(function(angular){
	appConfig.$inject = ['$urlRouterProvider'];
	function appConfig ($urlRouterProvider){
		$urlRouterProvider.otherwise('/');
	}

	angular.module('AngularStarterApp',[
		'ui.router',
		'ui.bootstrap',
		'ui.mask',
		'ui.grid',
		'ui.date',
		'ui.calendar',
		'ui.select',
		'ui.scroll',
		'AngularStarterApp.Modules'
	])
		.config(appConfig);

})(angular);
