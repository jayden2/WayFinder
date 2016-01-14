$(document).ready(function() {
	//breadcumbs
	$(document).on('click', '.breadcrumb a', function(e)
	{
		$('.breadcrumb li').addClass('active');
		e.target.blur();
	});
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
	$(document).on('click', '.campusSel li.active', function(e) 
	{
		$('.campusSel li.active').removeClass('active');
		$('.buildingSel li.active').removeClass('active');
		$('.floorSel li.active').removeClass('active');
		e.target.blur();
	});
	//building select
	$(document).on('click', '.buildingSel li', function() 
	{
		$('.buildingSel li.active').removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', '.buildingSel li.active', function(e) 
	{
		e.target.blur();
		$('.buildingSel li.active').removeClass('active');
		$('.floorSel li.active').removeClass('active');
	});
	//floor select
	$(document).on('click', '.floorSel li', function() 
	{
		$('.floorSel li.active').removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', '.floorSel li.active', function(e) 
	{
		e.target.blur();
		$('.floorSel li.active').removeClass('active');
	});
});