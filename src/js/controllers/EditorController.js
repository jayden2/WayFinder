app.controller('EditorController',['$scope', 'mapService', function($scope, mapService) {
	mapService.success(function(data) {
		$scope.maps = data;
	});
	$scope.filters = { };
	$scope.predicate = 'map.id';
	$scope.reverse = false;
	$scope.order = function(predicate) {
		$scope.filters = { };
		if (predicate === 'num0') {
			$scope.reverse = false;
			$scope.predicate = 'map.id';
		}
		if (predicate === 'num9') {
			$scope.reverse = true;
			$scope.predicate = 'map.id';
		}
		if (predicate === 'nameA') {
			$scope.reverse = false;
			$scope.predicate = 'map.name';
		}
		if (predicate === 'nameZ') {
			$scope.reverse = true;
			$scope.predicate = 'map.name';
		}
	}
	$scope.selectionFilter = function(query) {
		$scope.filters = { };
		if (query === 'unlink') {
			$scope.filters.link = false;
		} else if (query === 'favourite') {
			$scope.filters.favourite = true;
		} else {
			$scope.filters = { };
		}
	}
	$scope.favouriteState = function() {
    };
}]);