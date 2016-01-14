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
		templateUrl: 'scripts/directives/modal-edit.html',
		transclude: true,
		link: function ($scope) {
			$scope.campusInput = "";
			$scope.buildingInput = "";
			$scope.floorInput = "";
			$scope.createInput = "";
			$scope.campusChange = function(campusName) {
				$scope.campusInput = campusName;
				clearInput();
			}
			$scope.buildingChange = function(buildingName) {
				$scope.buildingInput = buildingName;
				clearInput();
			}
			$scope.floorChange = function(floorName) {
				$scope.floorInput = floorName;
				clearInput();
			}
			$scope.createChange = function(createName) {
				$scope.createInput = createName;
				clearInput();
			}
			$scope.clearInput = function() {
				$('#modal1').on('hidden.bs.modal', function (e) {
					$(this).find("input,textarea,select").val('').end();
				});
			}
		},
	};
});