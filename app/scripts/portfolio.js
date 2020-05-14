$(() => {
	$(document).on('click', '.p-item-cover', function () {
		$(window).trigger('resize');
	});

	// $('.modal-sl').each(function (i, item) {
	// 	$(item).slick({
	// 		dots: false,
	// 		infinite: false,
	// 		speed: 300,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		adaptiveHeight: true,
	// 		prevArrow: $(item).parent().find('.fa-l'),
	// 		nextArrow: $(item).parent().find('.fa-r'),
	// 	});
	// });

	$(document).on('opened', '.remodal', function () {
		if (!$(this).find('.modal-sl').hasClass('slick-initialized')) {
			$(this).find('.modal-sl').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				prevArrow: $(this).parent().find('.fa-l'),
				nextArrow: $(this).parent().find('.fa-r'),
			});
		}
	});
});

