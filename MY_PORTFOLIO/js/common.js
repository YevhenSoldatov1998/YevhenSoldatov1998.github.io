$(function() {

 new WOW().init();

 $(".category .category_item .a_item").mPageScroll2id();

 $('.portfolio_item_inner').magnificPopup({
 	type: "image",
 	 gallery:{
    enabled:true
  },
   removalDelay: 300,
   mainClass: 'mfp-fade'
 });

 $('.port_img').magnificPopup({
type: 'inline'
});
 $(".filter_item").click(function(){

  $(".filter_item").removeClass('active');
  $(this).addClass('active');
 });
 var mixer = mixitup('#portfolio_grid');
  
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

   		if($(document).scrollTop()> 200){

        $('.navbar-inverse').addClass('fixed');
 }
       else{
       	$('.navbar-inverse').removeClass('fixed');
       }
       
       if($(document).width()> 992){
       	if($(document).scrollTop() > $('.slider').height() -25){
        $('.category').addClass('category_fixed');
       }
       else{
       	      $('.category').removeClass('category_fixed');

       }}
         if($(document).width()< 560){
         	$('.s-main').addClass('classOut');
         }
         else{
         	    $('.s-main').removeClass('classOut');

         }
       
   	});

$(window).load('load',function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").fadeOut("slow"); 
});
