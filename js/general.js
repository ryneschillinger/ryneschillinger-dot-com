$(document).ready(function() {

	// HOMEPAGE: Work filters show/hide toggle on mobile

	$('#filters-show-hide').on('click', function() {
		if ( $(this).hasClass('filters-hidden') ) {
			$(this).css('transform', 'rotate(180deg) translateY(-3px)').removeClass('filters-hidden');
			$('#filters-buttons').css('display', 'block')
		}
		else {
			$(this).css('transform', 'rotate(0deg)').addClass('filters-hidden');
			$('#filters-buttons').css('display', 'none')
		}
	});


	// HOMEPAGE: Change "Show me" label on filter button click

	$('.filters-button').on('click', function() {
		$('#filters-show-me').text( $(this).text() );
	});


});