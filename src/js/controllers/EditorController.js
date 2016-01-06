app.controller('EditorController',['$scope', '$compile', '$location', 'mapService', function($scope, $compile, $location, mapService) {
	mapService.success(function(data) {
		$scope.maps = data;
		var prevId, prevRoomName, prevCatname, prevCatId, prevCatCategory;
		$scope.filters = { };
		$scope.predicate = 'id';
		$scope.reverse = false;
		$scope.entitiesState = true;
		$scope.idSelected = '';
		$scope.roomSelected = '';
		$scope.url = $location.path();
		console.log($scope.url);
		$("[data-toggle=tooltip]").tooltip();
		
		$scope.order = function(predicate) {
			$scope.filters = { };
			if (predicate === 'num0') {
				$scope.reverse = false;
				$scope.predicate = 'id';
			}
			if (predicate === 'num9') {
				$scope.reverse = true;
				$scope.predicate = 'id';
			}
			if (predicate === 'nameA') {
				$scope.reverse = false;
				$scope.predicate = 'name';
			}
			if (predicate === 'nameZ') {
				$scope.reverse = true;
				$scope.predicate = 'name';
			}
		}
		$scope.selectionFilter = function(query) {
			$scope.filters = { };
			if (query === 'unlink') {
				$scope.filters.link = false;
			} else if (query === 'category') {
				$scope.filters.category = 'None';
			} else {
				$scope.filters = { };
			}
		}
		$scope.unlinkedNodes = function() {
			var count = 0;
			angular.forEach($scope.maps, function(map) {
				count += !map.link ? 1 : 0;
			});
			return count;
		}
		$scope.roomNameHolder = function(id, name) {
			prevId = id;
			prevRoomName = name;
		}
		$scope.roomCategoryHolder = function(id, name, category) {
			prevCatId = id;
			prevCatName = name;
			prevCatCategory = category;
		}
		$scope.checkEnterKey = function($event) {
			var keyCode = $event.which || $event.keyCode;
			if (keyCode === 13 && prevRoomName != name) {
				$scope.doBlur($event);
			} else if (keyCode === 13) {
				$scope.doBlur($event);
			}
		}
		$scope.doBlur = function($event){
			var target = $event.target;
			target.blur();
		}
		$scope.selection = function(id, name) {
			$scope.entitiesState = false;
			$scope.idSelected = id;
			$scope.roomSelected = name;
		}
		$scope.log = function(type, id, name, state) {
			var logText, newEntry;
			switch(type) {
				case 0:
				if (prevCatCategory != state) {
					if (state) {
						logText = "has changed category from " + prevCatCategory + " to "  + state;						
					}
					if (name == "") {
						newEntry = $('<li>' + 'Room ID: ' + id + ' ' + logText + '</li>');
					} else {
						newEntry = $('<li>' + 'Room name: ' + name + ' ' + logText + '</li>');
					}
					updateLog(newEntry);
				}
				break;
			case 1:
				if (state) {
						logText = "is now linked";
					} else {
						logText = "is now unlinked";
					}
					if (name == "") {
						newEntry = $('<li>' + 'Room ID: ' + id + ' ' + logText + '</li>');
					} else {
						newEntry = $('<li>' + 'Room name: ' + name + ' ' + logText + '</li>');
					}
					updateLog(newEntry);
				break;
			case 2:
				if (prevRoomName != name) {
					logText = "has changed to";
					if (name == "") {
						newEntry = $('<li>' + 'Room ID: ' + id + ' ' + logText + ' ' + "an empty string" + '</li>');
					} else if (prevRoomName == ''){
						newEntry = $('<li>' + 'Room ID: ' + id + ' ' + logText + ' Room name: ' + name + '</li>');
					} else {
						newEntry = $('<li>' + 'Room ID: ' + id + ' changed from Room name: ' + prevRoomName + ' ' + ' to ' + name + '</li>');
					}
					updateLog(newEntry);
				}
				break;
			}
		}
		$scope.undo = function(event) {
			$(".log ul").prepend('Undo Made');
			console.log(event.target);
			$(event.taget).remove();
			
		}
		function updateLog(newEntry) {
			$("#filler").remove();
			$(".log ul").prepend(newEntry);
			$(".log li:nth-child(5)").remove();
			
			var undoButton='<span class="undo"> | <a href="" ng-click="undo($event)">undo</a></span>';
			angular.element($(".log li:first-child")).append($compile(undoButton)($scope));
		}
	});
}]);