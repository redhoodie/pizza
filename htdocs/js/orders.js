$(function() {
  // Draw orders
  for (i = 0; i < orders.length; ++i) {
    var order = orders[i];
    var delivery = order.form[0]['value'] == 'delivery';
    var name = order.form[1]['value'];
    var address = order.form[2]['value'];
    var number = order.form[3]['value'];
    
    var order_html = '<h2>' + name + '</h2>';

    if (delivery) {
      order_html += '<p>';
      order_html += '<strong>Address:</strong> ' + address + '<br/>';
      order_html += '<strong>Number:</strong> ' + number;
      order_html += '</p>';
    }

    order_html += get_order_html(order.pizzas, delivery, false);

    $('#orders').append('<div class="panel panel-default" id="' + i + '"><div class="panel-body"><div class="row"><div class="col-xs-10"><table class="table"><tr><th>Item</th><th>Cost</th></tr>' + order_html + '</table></div><div class="col-xs-2 text-right"><a href="orders.html" class="btn btn-default btn-lg">Cancel Order</button></div></div></div>');
    $('#orders a').on('click', function(e){
      var i = $(this).closest('.panel').attr('id');
      console.log(i);
      orders.splice(i, 1);
      save_orders();
    });
  }
});