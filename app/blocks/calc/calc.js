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
}
