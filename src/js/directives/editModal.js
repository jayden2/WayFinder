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
			callbackbuttonleft: '&ngClickLeftButton',
			callbackbuttonright: '&ngClickRightButton',
			modalName: '@'
		},
		templateUrl: 'js/directives/modal-edit.html',
		transclude: true,
		link: function ($scope) {
		},
	};
});