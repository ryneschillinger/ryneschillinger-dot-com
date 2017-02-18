$(document).ready(function(){
	// Browser window scroll (in pixels) after which the "back to top" button is shown
	var offset = 300,
		// Reduce button opacity after scrolling this much
		offset_opacity = 1200,
		// Duration of the top scrolling animation
		scroll_top_duration = 700,
		// Grab the "back to top" button
		$back_to_top = $('.cd-top');

	// Hide or show the "back to top" button
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	// Smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});