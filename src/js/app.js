var app = angular.module('WayFinder', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/editor', {
		controller: 'EditorController',
		templateUrl: 'views/editor.html'
	})
	.when('/', {
		controller: 'DashboardController',
		templateUrl: 'views/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});