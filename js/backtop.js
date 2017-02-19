$(document).ready(function(){
	// Browser window scroll (in pixels) after which the "back to top" button is shown
	var offset = 300,
		// Reduce button opacity after scrolling this much
		offsetOpacity = 1200,
		// Duration of the top scrolling animation
		scrollTopDuration = 700,
		// Grab the "back to top" button
		backToTop = $('.cd-top'),
		reducedOpacity = false;

	// Hide or show the "back to top" button
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? backToTop.addClass('cd-is-visible') : backToTop.removeClass('cd-is-visible cd-fade-out');

		// Reduce button opacity if user scrolls down for a bit
		if ( $(this).scrollTop() > offsetOpacity && reducedOpacity == false) { 
			backToTop.addClass('cd-fade-out');
			reducedOpacity = true;
		}
	});

	// Make button visible again if user starts scrolling up
	$(window).bind('mousewheel', function(event) {
		if (event.originalEvent.wheelDelta >= 100) {
			backToTop.removeClass('cd-fade-out');
		}
		// Reduce opacity if they start scrolling again
		else {
			reducedOpacity = false;
		}
	});

	// Smooth scroll to top
	backToTop.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scrollTopDuration
		);
	});


	// Smooth scrolls on nav link clicks

	$('.work-link').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $('#work-gallery').offset().top ,
		 	}, scrollTopDuration
		);
	});

	$('.about-link').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $('#about').offset().top ,
		 	}, scrollTopDuration
		);
	});

	$('.contact-link').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $('#contact').offset().top ,
		 	}, scrollTopDuration
		);
	});

});