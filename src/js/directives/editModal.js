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
			$scope.callbackbutton = function(title) {
				alert(title);
				$scope.floor = title;
			}
		},
	};
});