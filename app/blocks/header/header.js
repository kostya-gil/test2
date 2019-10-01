import $ from 'jquery';

export default function header() {
	let $item = null;

	$(document).on('click', '.nav__link', function () {
		if ($item) {
			$item.removeClass('active');
		}
		$item = $(this);
		$item.addClass('active');

		if ($('.menu').hasClass('active')) {
			$('.menu').slideUp().promise().then(() => {
				$('.menu').removeClass('active');
			});
		}
		$('html, body').animate({
			scrollTop: $('.' + $(this).attr('data-link')).offset().top - $('.header').outerHeight()
		}, {
			duration: 500
		});
		return false;
	});

	$(document).on('click', '.menu-btn', () => {
		$(this).toggleClass('active');
		const $contentClass = $('.menu');
		if ($contentClass.hasClass('active')) {
			$contentClass.slideUp().promise().then(() => {
				$contentClass.removeClass('active');
			});
		} else {
			$contentClass.slideDown();
			$contentClass.addClass('active');
		}
	});
}

