import 'slick-carousel';
import $ from 'jquery';

export default function examples() {
	$('.example-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.ea-l'),
		nextArrow: $('.ea-r')
	});
}
