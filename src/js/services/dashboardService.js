app.factory('dashboardService', ['$http', function($http) {
	return $http.get('sample_data/campusData.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err
	});
}]);