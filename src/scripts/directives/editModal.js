app.directive('modal', function () {
	return {
		restrict: 'EA',
		scope: {
			title: '=modalTitle',
			header: '=modalHeader',
			body: '=modalBody',
			campusAbbr: '=modalCampusAbbr',
			campusName: '=modalCampusName',
			campusLat: '=modalCampusLat',
			campusLong: '=modalCampusLong',
			campusZoom: '=modalCampusZoom',
			buildingName: '=modalBuildingName',
			floorName: '=modalFloorName',
			btnType: '=modalBtn',
			modalName: '@'
		},
		templateUrl: 'scripts/directives/modal-edit.html',
		transclude: true,
		link: function ($scope) {
			$scope.campusAbbrInput = "";
			$scope.campusNameInput = "";
			$scope.campusLongInput = "";
			$scope.campusLatInput = "";
			$scope.campusZoomInput = "";
			$scope.buildingInput = "";
			$scope.floorInput = "";
			$scope.createInput = "";
			$scope.campusChange = function(type, data) {
				switch(type) {
					case 0:
						$scope.campusAbbrInput = data;
						break;
					case 1:
						$scope.campusNameInput = data;
						break;
					case 2:
						$scope.campusLongInput = data;
						break;
					case 3:
						$scope.campusLatInput = data;
						break;
					case 4:
						$scope.campusZoomInput = data;
						break;
				}
				$scope.clearInput();
			}
			$scope.buildingChange = function(buildingName) {
				$scope.buildingInput = buildingName;
				$scope.clearInput();
			}
			$scope.floorChange = function(floorName) {
				$scope.floorInput = floorName;
				$scope.clearInput();
			}
			$scope.campusCreateData = function(createName) {
				$scope.createInput = createName;
				$scope.clearInput();
			}
			$scope.buildingCreateData = function(createName) {
				$scope.createInput = createName;
				$scope.clearInput();
			}
			$scope.floorCreateData = function(createName) {
				$scope.createInput = createName;
				$scope.clearInput();
			}
			$scope.clearInput = function() {
				$('#modal1').on('hidden.bs.modal', function (e) {
					$(this).find("input,textarea,select").val('').end();
				});
			}
			$scope.editCampus = function() {
				//
			}
			$scope.editBuilding = function() {
				//
			}
			$scope.editFloor = function() {
				//
			}
			$scope.campusCreate = function() {
				//
			}
			$scope.buildingCreate = function() {
				//
			}
			$scope.floorCreate = function() {
				//
			}
		},
	};
});