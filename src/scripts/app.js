var app = angular.module('WayFinder', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'DashboardController',
		templateUrl: 'templates/dashboard.html'
	})
	.when('/editor/:id1/:id2/:id3', {
		controller: 'EditorController',
		templateUrl: 'templates/editor.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});