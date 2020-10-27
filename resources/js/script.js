/* global $ */

/* eslint-env jquery */

$('document').ready(function() {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {

        if (direction == "down") {

            $('nav').addClass('sticky');

        } else {

            $('nav').removeClass('sticky');

        }

    }, {offset: '60px;'

    });
    
    /* Scroll on buttoms */
    $(".js--scroll-to-plans").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},100);       
    });
    
        $(".js--scroll-to-start").click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},100);       
    });
    

	
    
    /* Animations on scroll */		
	
  $('.js--wp-1').waypoint(  
  (direction) => {
  // add the class animated__animated and animate__fadeIn to waypoint 1
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  },
  {
    offset: '50%',
  });
	
//When you reach waypoint 2
$('.js--wp-2').waypoint(
  (direction) => {
// add the class animated__animated and animate__fadeInLeft to waypoint 2
    $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
  },
  {
    offset: '50%',
  });
	
//When you reach waypoint 3
$('.js--wp-3').waypoint(
  (direction) => {
// add the class animated__animated and animate__fadeIn to waypoint 3
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  },
  {
    offset: '50%',
  });
	
//When you reach waypoint 4
$('.js--wp-4').waypoint(
  (direction) => {
// add the class animated__animated and animate__bounceIn to waypoint 4
    $('.js--wp-4').addClass('animate__animated animate__bounceIn');
  },
  {
    offset: '25%',
  });
	
		$('.js--header').waypoint(
  (direction) => {
    if (direction === 'up') {
// remove the animation classes from all waypoints (1 - 4)
      $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
      $('.js--wp-2').removeClass('animate__animated animate__fadeInLeft');
      $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
      $('.js--wp-4').removeClass('animate__animated animate__bounceIn');
    }
  },
  {
    offset: '-25%',
  });
			
          /* Mobile navigation */
	$('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
	
});
