var undoHolder = new Array(1,2,3,4);
//type:type, id:id, name:name, state:state, prevId:prevId, prevCatId,prevCatId, prevRoomName:prevRoomName, prevCatName:prevCatName, prevCatCategory:prevCatCategory
function updateUndoManager(logInfo) {
	undoHolder.pop();
	undoHolder.unshift(logInfo);
}
function undoAction(event) {
	var whatNumElement, updateText;
	
	whatNumElement = ($('.log li').index((event.target).closest('li')));
	$(event.target).closest('li').remove();

	return updateText = getUndoEntry(whatNumElement);
}
function getUndoEntry(i) {
	var newEntry;
	switch(undoHolder[i]["type"]) {
		case 0:
			if (undoHolder[i]["state"]) {
				logText = "has changed category to <b>"  + undoHolder[i]["prevCatCategory"] + "</b>";									
				newEntry = $('<li class="undoEntry">' + '<b>Undo</b> | Room ID: <b>' + undoHolder[i]["id"] + '</b> ' + logText + '</li>');
			}
			return newEntry;
		break;
		case 1:
			if (undoHolder[i]["state"]) {
				logText = "is now unlinked";
			} else {
				logText = "is now linked";
			}
			newEntry = $('<li class="undoEntry">' + '<b>Undo</b> | Room ID: <b>' + undoHolder[i]["id"] + '</b> ' + logText + '</li>');
			return newEntry;
		break;
		case 2:
			logText = "has changed to";
			if (undoHolder[i]["prevRoomName"] == "") {
				newEntry = $('<li class="undoEntry">' + '<b>Undo</b> | Room ID: <b>' + undoHolder[i]["id"] + '</b> ' + logText + ' ' + "an empty string" + '</li>');
			} else if (undoHolder[i]["name"] == ''){
				newEntry = $('<li class="undoEntry">' + '<b>Undo</b> | Room ID: <b>' + undoHolder[i]["id"] + '</b> ' + logText + ' Room name: <b>' + undoHolder[i]["prevRoomName"] + '</b></li>');
			} else {
				newEntry = $('<li class="undoEntry">' + '<b>Undo</b> | Room ID: <b>' + undoHolder[i]["id"] + '</b> ' + logText + ' Room name: <b>' + undoHolder[i]["prevRoomName"] + '</b></li>');
			}
			return newEntry;
		break;
		default:
			return newEntry = $('<li class="undoEntry">' + 'Undo: Error' + '</li>');
		break;
	}
}