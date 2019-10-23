import 'slick-carousel';
import $ from 'jquery';

export default function feedback() {
	$('.review-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: $('.fa-l'),
		nextArrow: $('.fa-r')
	});
}
