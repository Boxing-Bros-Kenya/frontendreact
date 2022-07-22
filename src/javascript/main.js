$(document).ready(function() {
	$('.open-menu').on('click', function() {
		 $('.navigation__nav').addClass('open');
		 $('.navigation__background').addClass('open');
		 $('.navigation__button').addClass('icon navigation__icon');
		 $('.navigation__button').addClass('icon navigation__icon::before');
	});

	$('.close-menu').on('click', function() {
		$('.navigation__nav').removeClass('open');
		$('.navigation__background').removeClass('open');
		$('.navigation__button').removeClass('icon navigation__icon');
	});
});
