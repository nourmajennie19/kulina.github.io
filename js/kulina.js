$(document).ready(function () {
	var screenHeight = window.innerHeight;
	$("#banner").css( "height", screenHeight + "px");
	$(".banner-text").css( "height", screenHeight - 130 + "px");
});
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});