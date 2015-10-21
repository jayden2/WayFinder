$(document).ready(function() {
	//dashboard tabs
	$(document).on('click', '.dashNav li', function() 
	{
		$('.dashNav li.active').removeClass('active');
		$(this).addClass('active');
	});
	//campus select
	$(document).on('click', '.campusSel li', function() 
	{
		$('.campusSel li.active').removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', '.campusSel li.active', function() 
	{
		$('.campusSel li.active').removeClass('active');
		$('.buildingSel li.active').removeClass('active');
		$('.floorSel li.active').removeClass('active');
	});
	//building select
	$(document).on('click', '.buildingSel li', function() 
	{
		$('.buildingSel li.active').removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', '.buildingSel li.active', function() 
	{
		$('.buildingSel li.active').removeClass('active');
		$('.floorSel li.active').removeClass('active');
	});
	//floor select
	$(document).on('click', '.floorSel li', function() 
	{
		$('.floorSel li.active').removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', '.floorSel li.active', function() 
	{
		$('.floorSel li.active').removeClass('active');
	});
});