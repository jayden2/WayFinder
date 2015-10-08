app.controller('EditorController',['$scope', '$filter', 'mapService', function($scope, $filter, mapService) {
	mapService.success(function(data) {
		$scope.maps = data;
		console.log($scope.maps);
	});
	$scope.filters = { };
	$scope.selectionFilter = function(query) {
		$scope.filters = { };
		if (query == 'unlink') {
			$scope.filters.link = false;
		} else if (query == 'favourite') {
			$scope.filters.favourite = true;
		} else {
			$scope.filters = { };
		}
	}
	$scope.favouriteState = function() {
    };
}]);