app.controller('DashboardController',['$scope', 'dashboardService', function($scope, dashboardService) {
	var makeURL, campusPrevSelected, buildingPrevSelected, floorPrevSelected, campusSelected, buildingSelected, floorSelected;
	dashboardService.success(function(data) {
		$scope.campuses = data;
	});
	$scope.campusSelectedModal = '';
	$scope.buildingSelectedModal = '';
	$scope.floorSelectedModal = '';
	$scope.campusIs = false;
	$scope.buildingIs = false;
	$scope.floorIs = false;
    $scope.header = 'Edit Campus';
    $scope.body = 'Selected Campus';
    $scope.btnType = 'Save Changes';

	$scope.campusSelect = function(campus) {
		$scope.campusSelected = campus.name;
		$scope.editorURL();
		$scope.campusIs = true;
		$scope.buildingIs = false;
		$scope.floorIs = false;
		$scope.buildingPrevSelected = "1";
		if ($scope.campusPrevSelected != $scope.campusSelected) {
			$scope.campusPrevSelected = campus.name;
		} else {
			$scope.campusIs = false;
			$scope.buildingIs = false;
			$scope.floorIs = false;
			$scope.campusPrevSelected = "1";
			$scope.floorPrevSelected = "1";
		}
	}
	$scope.buildingSelect = function(building) {
		$scope.buildingSelected = building.name;
		$scope.editorURL();
		$scope.buildingIs = true;
		$scope.floorIs = false;
		$scope.floorPrevSelected = "3";
		if ($scope.buildingPrevSelected != $scope.buildingSelected) {
			$scope.buildingPrevSelected = building.name;
		} else {
			$scope.buildingIs = false;
			$scope.floorIs = false;
			$scope.buildingPrevSelected = "3";
		}
	}
	$scope.floorSelect = function(floor) {
		$scope.floorSelected = floor.name;
		$scope.editorURL();
		$scope.floorIs = true;
		if ($scope.floorPrevSelected != $scope.floorSelected) {
			$scope.floorPrevSelected = floor.name;
		} else {
			$scope.floorIs = false;
			$scope.floorPrevSelected = "4";
		}
	}
	$scope.editorURL = function() {
		//$scope.makeURL = '/' + $scope.campusSelected + '/'+ $scope.buildingSelected + '/' + $scope.floorSelected + '/';
		//angular.lowercase($scope.makeURL);
		//$scope.makeURL.replace(/\s/g, '');
		//console.log($scope.makeURL);
	}
	/*$scope.myRightButton = function (bool) {
		alert('');
	};*/
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