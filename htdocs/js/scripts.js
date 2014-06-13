// The order is stored here
var order = [];
var max_pizzas = 5;
var orders = load_orders();
var delivery_price = 3.00;

var pizzas = [
  {name: 'Supermisso', price: 8.50, image: 'pizza-1.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-2.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-3.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-4.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-1.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-2.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-3.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-4.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-1.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-2.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-3.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-4.png'}
];


// Try and load orders from localStorage
function load_orders(){
  try {
    return JSON.parse(window.localStorage["orders"]);
  }
  catch (e) {
    return [];
  }
}

function save_order() {
  orders.push({pizzas: order, form: $('form').serializeArray()});

  save_orders();
}

function save_orders() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function get_order_html(pizzas, delivery, show_delete) {
    order_html = "";

    total = 0.0;

    // Add Pizzas to the order
    for (var i = 0; i < pizzas.length; ++i) {
      pizza = pizzas[i];
      total += pizza.price;

      order_html += '<tr id="' + i + '"><th>' + pizza.name + '</th><td>$' + pizza.price.toFixed(2) + '</td>';
      if (show_delete) {
        order_html += '<td><button type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button></td>';
      }
      order_html += '</tr>';
    }

    // Add Delivery to the order
    if (delivery) {
      total += delivery_price;
      order_html += '<tr><th>Delivery</th><td>$' + delivery_price.toFixed(2) + '</td></tr>';
    }

    // Add GST
    order_html += '<tr><th>GST</th><th>$' + (total * 3 / 23).toFixed(2) + '</th></tr>';

    // Add price total
    order_html += '<tr><th>Total</th><th>$' + total + '</th></tr>';

    return order_html;
}