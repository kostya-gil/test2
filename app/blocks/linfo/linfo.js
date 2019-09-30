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
		nextArrow: $('.lia-r'),
		responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
}
