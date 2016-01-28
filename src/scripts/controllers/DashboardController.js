app.controller('DashboardController',['$scope', 'dashboardService', function($scope, dashboardService) {
	var campusPrevSelected, buildingPrevSelected, floorPrevSelected;
	dashboardService.success(function(data) {
		$scope.campuses = data;
	});
	$scope.campusSelectionState = true;
	$scope.fillerState = false;
	$scope.settingsState = false;
	$scope.helpState = false;
	//---------------------------
	$scope.campusData = '';
	$scope.buildingData = '';
	$scope.floorData = '';
	//----------------------------
	$scope.campusAbbrModal = '';
	$scope.campusNameModal = '';
	$scope.campusLatModal = '';
	$scope.campusLongModal = '';
	$scope.campusZoomModal = '';
	//----------------------------
	$scope.buildingNameModal = '';
	$scope.buildingAddressModal = '';
	$scope.buildingLatModal = '';
	$scope.buildingLongModal = '';
	//----------------------------
	$scope.floorNameModal = '';
	//----------------------------
	$scope.campusIs = false;
	$scope.buildingIs = false;
	$scope.floorIs = false;
	//---------------------------
    $scope.header = '???';
    $scope.body = '???';
    $scope.btnType = 'Save Changes';
	//-----------------------------
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
		$scope.campusData = campus;
		$scope.campusIs = true;
		$scope.buildingIs = false;
		$scope.floorIs = false;
		$scope.buildingPrevSelected = "1";
		confirmReady(false);
		if ($scope.campusPrevSelected != $scope.campusData.name) {
			$scope.campusPrevSelected = $scope.campusData.name;
		} else {
			$scope.campusIs = false;
			$scope.buildingIs = false;
			$scope.floorIs = false;
			$scope.campusData = '';
			$scope.buildingData = '';
			$scope.floorData = '';
			$scope.campusPrevSelected = "1";
			$scope.floorPrevSelected = "1";
		}
		$scope.editorURL();
	}
	$scope.buildingSelect = function(building) {
		$scope.buildingData = building;
		$scope.buildingIs = true;
		$scope.floorIs = false;
		$scope.floorPrevSelected = "3";
		confirmReady(false);
		if ($scope.buildingPrevSelected != $scope.buildingData.name) {
			$scope.buildingPrevSelected = $scope.buildingData.name;
		} else {
			$scope.buildingIs = false;
			$scope.floorIs = false;
			$scope.buildingData = '';
			$scope.floorData = '';
			$scope.buildingPrevSelected = "3";
		}
		$scope.editorURL();
	}
	$scope.floorSelect = function(floor) {
		$scope.floorData = floor;
		$scope.floorIs = true;
		confirmReady(true);
		if ($scope.floorPrevSelected != $scope.floorData.name) {
			$scope.floorPrevSelected = $scope.floorData.name;
		} else {
			confirmReady(false);
			$scope.floorIs = false;
			$scope.floorData = '';
			$scope.floorPrevSelected = "4";
		}
		$scope.editorURL();
	}
	$scope.editorURL = function() {
		var makeURL = $scope.campusData.name + '/'+ $scope.buildingData.name + '/' + $scope.floorData.name + '/';
		makeURL = makeURL.toLowerCase();
		makeURL = makeURL.replace(/\s+/g, '');
		$scope.id = makeURL;
	}
	confirmReady = function(check) {
		if (check) {
			$(".confirmBtn a").removeClass('disabled');
			imageCheck(true);
		} else {
			$(".confirmBtn a").addClass('disabled');
			imageCheck(false);
		}
	}
	$scope.breadcrumbChange = function() {
		$(".breadcrumb li:not(:first-child)").remove();
		$(".breadcrumb").append('<li class="active">' + $scope.campusData.name + "</li>");
		$(".breadcrumb").append('<li class="active">' + $scope.buildingData.name + "</li>");
		$(".breadcrumb").append('<li class="active">' + $scope.floorData.name + "</li>");
	}
	$scope.changeCampus = function(type) {
		switch(type) {
			case 0:
				$scope.header = 'Create Campus';
				campusModal();
				buildingModal();
				floorModal();
				$scope.btnType = 'Create';
				break;
			case 1:
				$scope.header = 'Edit Campus';
				campusModal();
				buildingModal();
				floorModal();
				$scope.btnType = 'Save Changes';
				break;
			case 2:
				$scope.header = 'Create Buidling';
				campusModal();
				buildingModal();
				floorModal();
				$scope.btnType = 'Create';
				break;
			case 3:
				$scope.header = 'Edit Building';
				campusModal();
				buildingModal();
				floorModal();
				$scope.btnType = 'Save Changes';
				break;
			case 4:
				$scope.header = 'Create Floor';
				campusModal();
				buildingModal();
				floorModal();
				$scope.btnType = 'Create';
				break;
			case 5:
				$scope.header = 'Edit Floor';
				campusModal();
				buildingModal();
				floorModal();
				$scope.btnType = 'Save Changes';
				break;
		}
	}
	campusModal = function() {
		$scope.campusAbbrModal = $scope.campusData.id;
		$scope.campusNameModal = $scope.campusData.name;
		$scope.campusLatModal = $scope.campusData.lat;
		$scope.campusLongModal = $scope.campusData.long;
		$scope.campusZoomModal = $scope.campusData.zoom;
	}
	buildingModal = function() {
		$scope.buildingNameModal = $scope.buildingData.name;
		$scope.buildingAddressModal = $scope.buildingData.address;
		$scope.buildingLatModal = $scope.buildingData.lat;
		$scope.buildingLongModal = $scope.buildingData.long;
	}
	floorModal = function() {
		$scope.floorNameModal = $scope.floorData.name;
	}
	imageCheck = function(check) {
		if ($scope.floorData.image && check) {
			$(".confirmBtn span").removeClass('fa-exclamation-triangle');
			$(".confirmBtn span").addClass('fa-check-circle');
		} else {
			if(!$(".confirmBtn span").hasClass('fa-exclamation-triangle')) {
				$(".confirmBtn span").removeClass('fa-check-circle');
				$(".confirmBtn span").addClass('fa-exclamation-triangle');
			}
		}
	}
}]);
