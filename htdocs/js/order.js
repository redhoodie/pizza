// Address auto-completion.
$(function() {
  var widget = new AddressFinder.Widget(document.getElementById("address"), "KVYHNX7CTUGWEQDBL4M6");
});

$(function() {
  // Draw Delivery Price
  $('form kbd').text('$' + delivery_price.toFixed(2));

  // Draw Pizzas
  for (i = 0; i < pizzas.length; ++i) {
    pizza = pizzas[i];
    $('#pizzas').append('<div class="col-xs-6 col-md-4 pizza"><a href="#" title="Add to Order" class="thumbnail"><img src="img/' + pizza.image + '" alt=""><div class="caption text-center"><span class="name">' +  (i + 1) + '. ' + pizza.name + '</span> <kbd class="price">$' + pizza.price.toFixed(2) + '</kbd></div></a></div>');
  }

  function draw_order(pizzas) {
    order_html = get_order_html(order, $('#method_delivery').is(':checked'), true);

    $('#order').html(order_html);

    // Remove button
    $('#order button').on('click', function(e){
      var i = parseFloat($(this).closest('tr').attr('id'));
      order.splice(i, 1);
      draw_order();
    });
  }

  // Update the order when a pizza is clicked
  $('.pizza').on('click', function(e) {
    e.preventDefault();
    if (order.length < max_pizzas) {
      order.push({
        name: $('.name', this).text(),
        price: parseFloat($('.price', this).text().substr(1))
      });
      draw_order();
    }
  });

  // Update the order when Pickup / Delivery are changed
  $('input[type=radio]').on('click', draw_order);

  $('.delivery-only').hide();
  $('input[type=radio').on('click', function(e) {
    if ($('#method_delivery').is(':checked')) {
      $('.delivery-only').slideDown('fast');
    }
    else {
      $('.delivery-only').slideUp('fast');
    }
  });

  draw_order();

  // Place the order
  $('form').on('submit', function(e){
    save_order();
  });
});
