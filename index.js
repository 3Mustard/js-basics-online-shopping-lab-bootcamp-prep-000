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
  var itemsAndPrices = [];
  var item;
  var price;
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }else if(cart.length === 1){
    
    item = cart.itemName;
    price = cart.itemPrice
    return `In your cart, you have ${item} at $${price}.`;
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