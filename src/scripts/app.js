var app = angular.module('WayFinder', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
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
	//this is to remove the hash(#) using the history api, cannot use locally
	//see index.html <base>
	//$locationProvider.html5Mode(true);
});
