app.controller('DashboardController',['$scope', 'dashboardService', function($scope, dashboardService) {
	var campusPrevSelected, buildingPrevSelected, floorPrevSelected, campusSelected, buildingSelected, floorSelected;
	dashboardService.success(function(data) {
		$scope.campuses = data;
	});
	$scope.campusSelectionState = true;
	$scope.fillerState = false;
	$scope.settingsState = false;
	$scope.helpState = false;
	$scope.campusSelected = '';
	$scope.buildingSelected = '';
	$scope.floorSelected = '';
	$scope.campusSelectedModal = '';
	$scope.buildingSelectedModal = '';
	$scope.floorSelectedModal = '';
	$scope.campusIs = false;
	$scope.buildingIs = false;
	$scope.floorIs = false;
    $scope.header = 'Edit Campus';
    $scope.body = 'Selected Campus';
    $scope.btnType = 'Save Changes';
    $(".breadcrumb li:not(:first-child)").remove();

    $scope.dashboardState = function(change) {
			switch(change) {
				case 0:
					$scope.campusSelectionState = true;
					$scope.fillerState = false;
					$scope.settingsState = false;
					$scope.helpState = false;
					break;
				case 1:
					$scope.campusSelectionState = false;
					$scope.fillerState = true;
					$scope.settingsState = false;
					$scope.helpState = false;
					break;
				case 2:
					$scope.campusSelectionState = false;
					$scope.fillerState = false;
					$scope.settingsState = true;
					$scope.helpState = false;
					break;
				case 3:
					$scope.campusSelectionState = false;
					$scope.fillerState = false;
					$scope.settingsState = false;
					$scope.helpState = true;
					break;
			}
		}
	$scope.campusSelect = function(campus) {
		$scope.campusSelected = campus.name;
		$scope.campusIs = true;
		$scope.buildingIs = false;
		$scope.floorIs = false;
		$scope.buildingPrevSelected = "1";
		confirmReady(false);
		if ($scope.campusPrevSelected != $scope.campusSelected) {
			$scope.campusPrevSelected = campus.name;
		} else {
			$scope.campusIs = false;
			$scope.buildingIs = false;
			$scope.floorIs = false;
			$scope.campusSelected = '';
			$scope.buildingSelected = '';
			$scope.floorSelected = '';
			$scope.campusPrevSelected = "1";
			$scope.floorPrevSelected = "1";
		}
		$scope.editorURL();
	}
	$scope.buildingSelect = function(building) {
		$scope.buildingSelected = building.name;
		$scope.buildingIs = true;
		$scope.floorIs = false;
		$scope.floorPrevSelected = "3";
		confirmReady(false);
		if ($scope.buildingPrevSelected != $scope.buildingSelected) {
			$scope.buildingPrevSelected = building.name;
		} else {
			$scope.buildingIs = false;
			$scope.floorIs = false;
			$scope.buildingSelected = '';
			$scope.floorSelected = '';
			$scope.buildingPrevSelected = "3";
		}
		$scope.editorURL();
	}
	$scope.floorSelect = function(floor) {
		$scope.floorSelected = floor.name;
		$scope.floorIs = true;
		confirmReady(true);
		if ($scope.floorPrevSelected != $scope.floorSelected) {
			$scope.floorPrevSelected = floor.name;
		} else {
			confirmReady(false);
			$scope.floorIs = false;
			$scope.floorSelected = '';
			$scope.floorPrevSelected = "4";
		}
		$scope.editorURL();
	}
	$scope.editorURL = function() {
		var makeURL = $scope.campusSelected + '/'+ $scope.buildingSelected + '/' + $scope.floorSelected + '/';
		makeURL = makeURL.toLowerCase();
		makeURL = makeURL.replace(/\s+/g, '');
		$scope.id = makeURL;
	}
	confirmReady = function(check) {
		if (check) {
			$(".confirmBtn a").removeClass('disabled');
		} else {
			$(".confirmBtn a").addClass('disabled');
		}
	}
	$scope.myRightButton = function (num) {
		alert(num);
	};
	$scope.breadcrumbChange = function() {
		$(".breadcrumb li:not(:first-child)").remove();
		$(".breadcrumb").append('<li class="active">' + $scope.campusSelected + "</li>");
		$(".breadcrumb").append('<li class="active">' + $scope.buildingSelected + "</li>");
		$(".breadcrumb").append('<li class="active">' + $scope.floorSelected + "</li>");
	}
	$scope.changeCampus = function(type) {
		switch(type) {
			case 0:
				$scope.header = 'Create Campus';
				$scope.campusSelectedModal = '';
				$scope.buildingSelectedModal = '';
				$scope.floorSelectedModal = '';
				$scope.btnType = 'Create';
				break;
			case 1:
				$scope.header = 'Edit Campus';
				$scope.campusSelectedModal = $scope.campusSelected;
				$scope.buildingSelectedModal = '';
				$scope.floorSelectedModal = '';
				$scope.btnType = 'Save Changes';
				break;
			case 2:
				$scope.header = 'Create Buidling';
				$scope.campusSelectedModal = $scope.campusSelected;
				$scope.buildingSelectedModal = '';
				$scope.floorSelectedModal = '';
				$scope.btnType = 'Create';
				break;
			case 3:
				$scope.header = 'Edit Building';
				$scope.campusSelectedModal = $scope.campusSelected;
				$scope.buildingSelectedModal = $scope.buildingSelected;
				$scope.floorSelectedModal = '';
				$scope.btnType = 'Save Changes';
				break;
			case 4:
				$scope.header = 'Create Floor';
				$scope.campusSelectedModal = $scope.campusSelected;
				$scope.buildingSelectedModal = $scope.buildingSelected;
				$scope.floorSelectedModal = '';
				$scope.btnType = 'Create';
				break;
			case 5:
				$scope.header = 'Edit Floor';
				$scope.campusSelectedModal = $scope.campusSelected;
				$scope.buildingSelectedModal = $scope.buildingSelected;
				$scope.floorSelectedModal = $scope.floorSelected;
				$scope.btnType = 'Save Changes';
				break;
		}
	}
}]);