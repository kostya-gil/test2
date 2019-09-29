import 'slick-carousel';
import $ from 'jquery';

export default function masters() {
	$('.masters-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.ma-l'),
		nextArrow: $('.ma-r')
	});
}
