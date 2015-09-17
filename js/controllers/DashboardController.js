app.controller('DashboardController',['$scope', 'dashboardService', function($scope, dashboardService) {
	dashboardService.success(function(data) {
		$scope.campusData = data;
	});
}]);