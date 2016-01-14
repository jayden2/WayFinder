app.directive('canvasEditor', function() {
	return {
		restrict: 'E',
		scope: {
			editor: '='
		},
		templateUrl: 'scripts/directives/canvas-editor.html'
	};
});