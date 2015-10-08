$(document).ready(function() {
	var logType, logFrom, logTo;
	//tools switch selection
	$(document).on('click', '.tools li', function(e)
	{
		e.preventDefault();
		$(".tools li.active").removeClass("active");
		$(this).addClass("active");
	});
	//layer switch selection
	$(document).on('click', '.layers li', function(e)
	{
		e.preventDefault();
		$(".layers li.active").removeClass("active");
		$(this).addClass("active");
	});
	//changes filter selection
	$(document).on('click', '.filterSelection a', function(e) 
	{
		e.preventDefault();
    	$(".filterText").text(this.innerHTML);
	});
	//swtich selection between entities and selection
	$(document).on('click', '.tableNav li', function(e)
	{
		$(".tableNav li.active").removeClass("active");
		$(this).addClass("active");
	});
	//favourite switch state
	$(document).on('click', '.star', function(e)
	{
		e.preventDefault();
		$(this).toggleClass('fa-star-o','fa-star');
		$(this).toggleClass('fa-star','fa-star-o');
	});
	//The Log: Choose State
	function logState(logType)
	{
		var logText;
		if (logType == "newLayer") {
			logText = "New Layer Created";
			updateLog(logText);
		}
		if (logType == "layerNameChanged" && logFrom != logTo) {
			logText = logFrom + " layer name has changed to " + logTo;
			updateLog(logText);
		}
	}
	//The Log: Show Log
	function updateLog(logText) {
		var newEntry = $('<li>' + logText + '</li>');
		$(".log ul").prepend(newEntry);
		$(".log li:nth-last-child(1)").remove();
	}
});