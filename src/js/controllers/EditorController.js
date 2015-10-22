app.controller('EditorController',['$scope', 'mapService', function($scope, mapService) {
	mapService.success(function(data) {
		$scope.maps = data;
		var prevId, prevRoomName;
		$scope.filters = { };
		$scope.predicate = 'id';
		$scope.reverse = false;
		$scope.entitiesState = true;
		$scope.roomSelected = '';
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
			} else if (query === 'favourite') {
				$scope.filters.favourite = true;
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
		$scope.checkEnterKey = function($event, name, id) {
			var keyCode = $event.which || $event.keyCode;
			if (keyCode === 13 && prevRoomName != name) {
				$scope.log(2, name, id);
				$scope.doBlur($event);
			} else if (keyCode === 13) {
				$scope.doBlur($event);
			}
		}
		$scope.doBlur = function($event){
			var target = $event.target;
			target.blur();
		}
		$scope.selection = function(name) {
			$scope.entitiesState = false;
			$scope.roomSelected = name;
			
		}
		$scope.log = function(type, name, state) {
			var logText, newEntry;
			switch(type) {
				case 0:
					if (state) {
						logText = "is now a favourite";
						newEntry = $('<li>' + 'Room: ' + name + ' ' + logText + '</li>');
						updateLog(newEntry);
					} else {
						logText = "is no longer a favourite";
						newEntry = $('<li>' + 'Room: ' + name + ' ' + logText + '</li>');
						updateLog(newEntry);
					}
				break;
			case 1:
				if (state) {
						logText = "is now linked";
						newEntry = $('<li>' + 'Room: ' + name + ' ' + logText + '</li>');
						updateLog(newEntry);
					} else {
						logText = "is now unlinked";
						newEntry = $('<li>' + 'Room: ' + name + ' ' + logText + '</li>');
						updateLog(newEntry);
					}
				break;
			case 2:
				if (prevRoomName != name) {
					logText = "has changed to";
					if (name == "") {
						newEntry = $('<li>' + 'Room: ' + prevRoomName + ' ' + logText + ' ' + "an empty string" + '</li>');
					} else {
						newEntry = $('<li>' + 'Room: ' + prevRoomName + ' ' + logText + ' ' + name + '</li>');
					}
					updateLog(newEntry);
				}
				break;
			}
		}
		function updateLog(newEntry) {
			$(".log ul").prepend(newEntry);
			$(".log li:nth-last-child(1)").remove();
		}
	});
}]);