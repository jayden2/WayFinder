app.controller('EditorController',['$scope', 'mapService', function($scope, mapService) {
	mapService.success(function(data) {
		$scope.mapData = data;
	});
}]);