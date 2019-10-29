/* eslint-disable quote-props */
/* eslint-disable quotes */
import $ from 'jquery';

export default function calc() {
	let $btn = $('.type-btn.active');

	$(document).on('click', '.type-btn', function () {
		if ($(this).hasClass('active')) {
			return false;
		}
		$btn.removeClass('active');
		$btn = $(this);
		const $btnType = $btn.attr('data-type');
		$btn.addClass('active');
		$('.calc-form__content-top, .calc-form__content-bottom').each((i, item) => {
			$(item).removeClass('active');
		});
		$('[data-type=' + $btnType + ']').each((i, item) => {
			$(item).addClass('active');
		});
		$('html, body').animate({
			scrollTop: $('[data-type=' + $btnType + ']').offset().top - $('.header').outerHeight()
		}, {
			duration: 500
		});
		$('#typecalc').val($btnType);
		$('.select').chosen('destroy');
		$(".select").chosen({ width: '100%', no_results_text: 'Нет совпадений' });
		return false;
	});


	// calc
	let metrs = 1;
	let type = 'Косметический';
	const prices = {
		"Капитальный": 3350,
		"Косметический": 1490,
		"Ремонт под ключ": 2790
	};

	// eslint-disable-next-line no-shadow
	function calc(metrs, type) {
		const price = prices[type] * metrs;
		const days = String(Math.ceil(price / 3)).split('')[0];

		$('#end-price').text(price + '.-');
		$('#days').text(' ' + days);
	}

	calc(metrs, type);

	setInterval(function () {
		$('.select').chosen({ no_results_text: 'Нет совпадений' }).change((e) => {
			if (e.target.className.indexOf('type-select') !== -1) {
				type = e.target.value;
				calc(metrs, type);
			}
		});
	}, 1000);

	$(document).on('keyup', '.ni', (e) => {
		if (e.target.value) {
			metrs = Number(e.target.value);
		}
		calc(metrs, type);
	});

	// end-price
	// #days
}
