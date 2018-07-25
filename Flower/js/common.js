$(document).ready(function() {
	
$(".down_href").mPageScroll2id();

 $('.image_open').magnificPopup();
  $('.image-link').magnificPopup({type:'image'});

$('.fotorama').fotorama({
  nav: 'thumbs',
  keyboard: 'true',
  thumbborderwidth: '5',
  thumbwidth: '100px'
});


	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
var clock = $(".clock").FlipClock({
	clockFace: "DailyCounter",
	autoStart: false , 
	language: "ru",

	

});
var dt = "December 28 2019 20:22:40";
var first = new Date(dt);
var last = Date.now();
var remaining = first-last;
remaining/=1000;
clock.setTime(remaining);
clock.setCountdown(true);
clock.start();

if ($(window).width() < 960) {
	var clock = $(".clock").FlipClock({
	clockFace: "DailyCounter",
	autoStart: false , 
	language: "ru",
    showSeconds: false
	

});
var dt = "December 28 2018 20:22:40";
var first = new Date(dt);
var last = Date.now();
var remaining = first-last;
remaining/=1000;
clock.setTime(remaining);
clock.setCountdown(true);
clock.start();
}

/*hamburger=========================*/
$('.hamburger').on('click',function(){
$(".menu_hidden").toggleClass("menu_active")
});
$(".icon-crossdown").on('click' , function(){
$(".menu_hidden").removeClass("menu_active")
});
$(".menu_hidden__link").on("click" , function(){
$(".menu_hidden").removeClass("menu_active")

});
/*form===============================*/



 

});


$(window).scroll(function(){
 
 if($(window).height() > 660){
  $('.top_scroll').addClass('active');
 }
 else
  $('.top_scroll').removeClass('active');
});
	
 $('.top_scroll').click(function(){
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
 });
