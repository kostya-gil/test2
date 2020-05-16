import $ from 'jquery';

export default function header() {
	let $item = null;

	$(document).on('click', '.nav__link', function () {
		const $attr = $(this).attr('data-link');
		if (typeof $attr === typeof undefined && $attr === false) {
			return false;
		}
		if (window.location.pathname !== '/') {
			localStorage.setItem('link', $(this).attr('data-link'));
			window.location.href = '/';
		} else {
			localStorage.removeItem('link');
		}
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

	$(document).on('click', '.scrl-btn', function () {
		$('html, body').animate({
			scrollTop: $('.' + $(this).attr('data-link')).offset().top - $('.header').outerHeight()
		}, {
			duration: 500
		});
		return false;
	});

	$(document).ready(function() {
		if (localStorage.getItem('link') && window.location.pathname === '/') {
			$(`[data-link=${localStorage.getItem('link')}]`).addClass('active');
			$('html, body').animate({
				scrollTop: $('.' + localStorage.getItem('link')).offset().top - $('.header').outerHeight()
			}, {
				duration: 500
			});
			localStorage.removeItem('link');
		}
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

