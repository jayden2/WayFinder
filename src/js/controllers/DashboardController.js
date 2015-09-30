app.controller('DashboardController',['$scope', 'dashboardService', function($scope, dashboardService) {
	var makeURL, campusSelected, campusPrevSelected, buildingSelected, floorSelected;
	dashboardService.success(function(data) {
		$scope.campuses = data;
	});
	$scope.campusIs = false;
	$scope.buildingIs = false;
	$scope.campusSelect = function(campus) {
		$scope.campusSelected = campus.name;
		$scope.editorURL();
		$scope.campusIs = true;
		if ($scope.campusPrevSelected != $scope.campusSelected) {
			$scope.campusPrevSelected = campus.name;
			$scope.buildingIs = false;
		}
	}
	$scope.buildingSelect = function(building) {
		$scope.buildingSelected = building.name;
		$scope.editorURL();
		$scope.buildingIs = true;
	}
	$scope.floorSelect = function(floor) {
		$scope.floorSelected = floor.name;
		$scope.editorURL();
	}
	$scope.editorURL = function() {
		$scope.makeURL = '/' + $scope.campusSelected + '/'+ $scope.buildingSelected + '/' + $scope.floorSelected + '/';
		angular.lowercase($scope.makeURL);
		$scope.makeURL.replace(/\s/g, '');
		console.log($scope.makeURL);
	}
}]);