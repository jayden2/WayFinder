app.directive('canvasEditor', function() {
	return {
		restrict: 'E',
		scope: {
			editor: '='
		},
		templateUrl: 'js/directives/canvas-editor.html'
	};
});