app.factory('dashboardService', ['$http', function($http) {
	return $http.get('//.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err
	});
}]);