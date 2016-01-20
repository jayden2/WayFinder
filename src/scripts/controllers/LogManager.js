function logManager(type, state, id, name, prevRoomName, prevCatCategory) {
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
			return newEntry;
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
			return newEntry;
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
			return newEntry;
		}
		break;
	}
}