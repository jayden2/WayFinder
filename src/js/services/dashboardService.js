app.factory('dashboardService', ['$http', function($http) {
	return $http.get('https://github.com/jayden2/WayFinder/blob/master/src/js/services/sample_data/campusData.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err
	});
}]);