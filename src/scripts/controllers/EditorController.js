app.controller('EditorController',['$scope', '$compile', '$location', 'mapService', function($scope, $compile, $location, mapService) {
	mapService.success(function(data) {
		$scope.maps = data;
		var prevId, prevRoomName, prevCatName, prevCatId, prevCatCategory;
		
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
			var logInfo = {type:type, id:id, name:name, state:state, prevId:prevId, prevCatId,prevCatId, prevRoomName:prevRoomName, prevCatName:prevCatName, prevCatCategory:prevCatCategory};
			updateUndoManager(logInfo);
			
			var logText, newEntry;
			switch(type) {
				case 0:
				if (prevCatCategory != state) {
					if (state) {
						logText = "has changed category from <b>" + prevCatCategory + "</b> to <b>"  + state + "</b>";						
					}
					if (name == "") {
						newEntry = $('<li>' + 'Room ID: <b>' + id + '</b> ' + logText + '</li>');
					} else {
						newEntry = $('<li>' + 'Room name: <b>' + name + '</b> ' + logText + '</li>');
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
						newEntry = $('<li>' + 'Room ID: <b>' + id + '</b> ' + logText + '</li>');
					} else {
						newEntry = $('<li>' + 'Room name: <b>' + name + '</b> ' + logText + '</li>');
					}
					updateLog(newEntry);
				break;
			case 2:
				if (prevRoomName != name) {
					logText = "has changed to";
					if (name == "") {
						newEntry = $('<li>' + 'Room ID: <b>' + id + '</b> ' + logText + ' ' + "an empty string" + '</li>');
					} else if (prevRoomName == ''){
						newEntry = $('<li>' + 'Room ID: <b>' + id + '</b> ' + logText + ' Room name: <b>' + name + '</b></li>');
					} else {
						newEntry = $('<li>' + 'Room ID: <b>' + id + '</b> changed from Room name: <b>' + prevRoomName + '</b> ' + ' to <b>' + name + '</b></li>');
					}
					updateLog(newEntry);
				}
				break;
			}
		}
		$scope.undo = function(event) {
			var newEntry = undoAction(event);
			updateLog(newEntry);
			updateUndoManager('undone');
		}
		function updateLog(newEntry) {
			$("#filler").remove();
			$(".log ul").prepend(newEntry);
			$(".log li:nth-child(5)").remove();
	
			if (!$(".log li:first-child").hasClass("undoEntry")) {
				var undoButton='<span class="undo"> | <a href="" ng-click="undo($event)">undo</a></span>';
				angular.element($(".log li:first-child")).append($compile(undoButton)($scope));
			}
		}
	});
}]);