$(document).ready(function () {
	$(".pages__info-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,


	}),

		$(".nav-burger").click(function (event) {
			$(".nav-burger,.nav__menu").toggleClass("active");



		});

	$(".portfolio-burger").click(function (event) {
		$(".portfolio-burger,.nav-navigation").toggleClass("active");



	});

});


