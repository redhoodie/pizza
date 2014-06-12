$(function() {
	function resize() {
		if ($(window).width() > 991) {
			$('#order-information').css('min-height', $('#pizza-selector').height());
		}
		else {
			$('#order-information').css('min-height', 'none');
		}
	}
	resize();
	$(window).on('resize', resize);
});