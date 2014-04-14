// Nice Scroll for #
$("a").click(function() {
	var elementClicked = $(this).attr("href");
	if(elementClicked.indexOf("#") > -1)
	{
		var destination = $(elementClicked).offset().top;
		
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1000 );
		
		return false;
	}
});

function resize_section()
{
	$('.auto-resize').css('min-height', $( window ).height());
}

function toggle_nav() {
	var nav_container = $(".fixed-nav");
	var nav_toggler = $("#nav-toggler");
	
	if(nav_container.hasClass("opened"))
	{
		nav_container.removeClass("opened");
		nav_container.addClass("closed");
	}
	else
	{
		nav_container.removeClass("closed");
		nav_container.addClass("opened");
	}
	refresh_nav();
}

function refresh_nav()
{
	var nav_container = $(".fixed-nav");
	var nav_toggler = $("#nav-toggler");
	
	if(nav_container.hasClass("opened"))
	{
		nav_container.css("bottom",-8);
		nav_toggler.html('<i class="fa fa-angle-double-down"></i>');
	}
	else
	{
		nav_container.css("bottom",0-nav_container.height());
		nav_toggler.html('<i class="fa fa-angle-double-up"></i>');
	}
}

function refresh_portfolio()
{
	var max_height = 0, tmp_height;
	$(".portfolio-desc").each(function (i, obj) {
		tmp_height = $(this).height();
		
		if(max_height <= tmp_height)
			max_height = tmp_height;
	});
	
	$(".portfolio-desc").css('min-height', max_height);
}

$(function() {
	resize_section();
	refresh_nav();
	
	
	$(window).resize(function() {
		resize_section();
		refresh_nav();
		refresh_portfolio();
	});
});

$(window).load(function(){
	refresh_portfolio();
});