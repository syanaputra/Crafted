// Nice Scroll for #
$("a").click(function() {
	var elementClicked = $(this).attr("href");
	var destination = $(elementClicked).offset().top;
	
	$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1000 );
	return false;
});

function toggle_nav() {
	var nav = $(".fixed-nav");
	var nav_toggler = $("#nav-toggler");
	
	if(nav.hasClass("opened"))
	{
		nav.removeClass("opened");
		nav.addClass("closed");
		nav_toggler.html('<i class="fa fa-angle-double-up"></i>');
	}
	else
	{
		nav.removeClass("closed");
		nav.addClass("opened");
		nav_toggler.html('<i class="fa fa-angle-double-down"></i>');
	}
}

$(function() {
	toggle_nav();
});