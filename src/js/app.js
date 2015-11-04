var app = angular.module('WayFinder', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'DashboardController',
		templateUrl: 'views/dashboard.html'
	})
	.when('/editor/:id1/:id2/:id3', {
		controller: 'EditorController',
		templateUrl: 'views/editor.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});