$(document).ready(function() {
	var logType, logFrom, logTo;
	//tools switch selection
	$(".tools li").click(function(e)
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
	//create a new layer
	$(".newLayer").click(function(e)
	{
		e.preventDefault();
		var layerAmount = $(".layers li").length + 1;
		var newLayer = $('<li role="presentation"><a href="#"><input type="text" value="' + layerAmount + '" disabled="disabled"></a></li>');
		$(".layers ul").append(newLayer);

		logState("newLayer");
	});
	//layer change selection text into text box
	$(document).on('dblclick', '.layers li', function()
	{
		$('input', this).removeAttr('disabled');
		$('input', this).focus();
		$('input', this).select();
		logFrom = $('input', this).val();
	});
	$(document).on('blur', '.layers input', function() {
		$(this).attr('disabled', true);
		logTo = $(this).val();
		logState("layerNameChanged");
	});
	//changes filter selection
	$(".filterSelection a").click(function(e)
	{
		e.preventDefault();
    	$(".filterText").text(this.innerHTML);
	});
	//swtich selection between entities and selection
	$(".tableNav li").click(function(e)
	{
		e.preventDefault();
		$(".tableNav li.active").removeClass("active");
		$(this).addClass("active");
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