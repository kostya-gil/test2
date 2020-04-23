$(() => {
	$(document).on('click', '.p-item-cover', function() {
		$(window).trigger('resize');
	});

	$('.modal-sl').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: $('.fa-l'),
		nextArrow: $('.fa-r')
	});
});


