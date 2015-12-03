app.directive('modal', function () {
	return {
		restrict: 'EA',
		scope: {
			title: '=modalTitle',
			header: '=modalHeader',
			body: '=modalBody',
			campus: '=modalCampus',
			building: '=modalBuilding',
			floor: '=modalFloor',
			btnType: '=modalBtn',
			modalName: '@'
		},
		templateUrl: 'js/directives/modal-edit.html',
		transclude: true,
		link: function ($scope) {
			$scope.campusInput = "";
			$scope.buildingInput = "";
			$scope.floorInput = "";
			$scope.createInput = "";
			$scope.createInput = "";
			$scope.campusChange = function(campusName) {
				$scope.campusInput = campusName;
			}
			$scope.buildingChange = function(buildingName) {
				$scope.buildingInput = buildingName;
			}
			$scope.floorChange = function(floorName) {
				$scope.floorInput = floorName;
			}
			$scope.createChange = function(createName) {
				$scope.createInput = createName;
			}
			$scope.callBackData = function(name) {
				alert(name);
			}
		},
	};
});