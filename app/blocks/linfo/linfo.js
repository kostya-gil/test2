import 'slick-carousel';
import $ from 'jquery';

export default function linfo() {
	$('.linfo-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.lia-l'),
		nextArrow: $('.lia-r')
	});
}
