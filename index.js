var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObj = {};
 newObj.itemName = item;
 newObj.itemPrice = Math.floor(Math.random() * 100) + 1;
 cart.push(newObj);
 return `${newObj.itemName} has been added to your cart.`;
}

function viewCart() {
 if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  var itemAndPrice = [];
  var item;
  var price;
  for (var i = 0; i < cart.length; i++){
     itemAndPrice = cart[i];
     item = cart[i][itemName];
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}