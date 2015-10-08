app.controller('EditorController',['$scope', 'mapService', function($scope, mapService) {
	mapService.success(function(data) {
		$scope.maps = data;
		console.log($scope.maps);
	});
	$scope.favouriteState = function() {
    };
}]);