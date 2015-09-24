$(document).ready(function() {
	$('campusSel ul:nth-child(1)').addClass('active');
	$('buildingSel li:nth-child(1)').addClass('active');
	$('floorSel:nth-child(1)').addClass('active');
	//campus select
	$(document).on('click', '.campusSel li', function() 
	{
		$('.campusSel li.active').removeClass('active');
		$(this).addClass('active');
		$('buildingSel li:nth-child(1)').addClass('active');
	});
	//building select
	$(document).on('click', '.buildingSel li', function() 
	{
		$('.buildingSel li.active').removeClass('active');
		$(this).addClass('active');
		$('floorSel ul:first-child').addClass('active');
	});
	//floor select
	$(document).on('click', '.floorSel li', function() 
	{
		$('.floorSel li.active').removeClass('active');
		$(this).addClass('active');
	});
});