$(function() {
   
 new WOW().init();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	


});
$(document).ready(function(){
    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });
});

$('.addc').click(function() {
   	$('.callback').css({"top": $(window).scrollTop()+ 150}).fadeIn();
   	$('.overlay_callback').fadeIn();

   	$('.overlay_callback').click(function(){
   		$('.callback').fadeOut();
   		   	$('.overlay_callback').fadeOut();

   	});

   
});
$(window).scroll(function(){
	$('.callback').css({'top': $(window).scrollTop()+150});
}).scroll();

	$(document).scroll(function(){
   		if($(document).scrollTop()> $('header').height()+10){

                 $('header').addClass('fixed');
 }
       else{
       	$('header').removeClass('fixed');
       }
   	});

