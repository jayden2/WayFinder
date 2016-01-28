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
			buildingAddress: '=modalBuildingAddress',
			buildingLat: '=modalBuildingLat',
			buildingLong: '=modalBuildingLong',
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
			$scope.buildingNameInput = "";
			$scope.buildingAddressInput = "";
			$scope.buildingLatInput = "";
			$scope.buildingLongInput = "";
			$scope.floorNameInput = "";
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
			$scope.buildingChange = function(type, data) {
				switch(type) {
					case 0:
						$scope.buildingNameInput = data;
						break;
					case 1:
						$scope.buildingAddressInput = data;
						break;
					case 2:
						$scope.buildingLatInput = data;
						break;
					case 3:
						$scope.buildingLongInput = data;
						break;
					}
				$scope.clearInput();
			}
			$scope.floorChange = function(type, data) {
				switch(type) {
					case 0:
						$scope.floorNameInput = data;
						break;
					}
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
				$scope.campusAbbrInput = "";
				$scope.campusNameInput = "";
				$scope.campusLongInput = "";
				$scope.campusLatInput = "";
				$scope.campusZoomInput = "";
				$scope.buildingNameInput = "";
				$scope.buildingAddressInput = "";
				$scope.buildingLatInput = "";
				$scope.buildingLongInput = "";
				$scope.floorNameInput = "";
				$scope.createInput = "";
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
