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
});