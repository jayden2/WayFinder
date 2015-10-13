app.controller('EditorController',['$scope', 'mapService', function($scope, mapService) {
	mapService.success(function(data) {
		$scope.maps = data;
	});
	$scope.filters = { };
	$scope.predicate = 'id';
	$scope.reverse = false;
	$scope.order = function(predicate) {
		$scope.filters = { };
		if (predicate === 'num0') {
			$scope.reverse = false;
			$scope.predicate = 'id';
		}
		if (predicate === 'num9') {
			$scope.reverse = true;
			$scope.predicate = 'id';
		}
		if (predicate === 'nameA') {
			$scope.reverse = false;
			$scope.predicate = 'name';
		}
		if (predicate === 'nameZ') {
			$scope.reverse = true;
			$scope.predicate = 'name';
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