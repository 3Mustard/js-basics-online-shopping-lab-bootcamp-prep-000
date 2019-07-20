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
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }else{
    for(var i = 0; i < cart.length; i++){
      var itemAndPrice = cart[i];
      var item = itemsAndPrice.itemName;
      var price = cart.itemPrice;
      itemsAndPrices.push(`${item} at $${price}`);
      }
    return `In your cart, you have ${itemsAndPrices.join(", ")}.`;
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