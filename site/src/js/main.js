$(document).ready(function() {
	$(function() {
		$(document).scroll(function() {
			var $nav = $('.head');
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});

		$(document).scroll(function() {
			var $nav = $('.mobile');
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	});
});
