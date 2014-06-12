// Keep the panels the same height.
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

// The order is stored here
var order = [];
var max_pizzas = 5;

$(function() {
	// Get the total price of pizzas ordered.
	function get_order_total () {
		total = 0.0;

		if ($('#method_delivery').is(':selected')) {
			delivery_price = $('#method_delivery').next('.price').text().substr(1);
			total += parseInt(delivery_price);
		}

		for (i = 0; i < order.length; ++i) {
			pizza = order[i];
			total += pizza.price;
		};

		return total;
	}

	function draw_order() {
		total = get_order_total();

		$('#order').html("");

		for (i = 0; i < order.length; ++i) {
			pizza = order[i];
			$('#order').html($('#order').html() + '<tr><th>' + pizza.name + '</th><td>$' + pizza.price + '</td></tr>')
		}

		$('#order').html($('#order').html() + '<tr><th>Total</th><th>$' + total + '</th></tr>')
	}

	draw_order();

	$('.pizza').on('click', function(e) {
		e.preventDefault();
		if (order.length < max_pizzas) {
			order.push({
				name: $('.name', this).text(),
				price: parseInt($('.price', this).text().substr(1))
			});
			draw_order();
		}
	});
});

