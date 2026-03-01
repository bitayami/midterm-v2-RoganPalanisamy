/*
We have a shopping cart represented by an array of items. Each item has a price and a quantity.

Instruction
Create a function named calculateTotal that receives an array of item objects. Each object has `price` and `quantity`. Return the total cost of the cart.
*/

const calculateTotal = function (cart) {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.quantity;
  }

  return total;
};


const cartArr = [
  {  name : 'toys',  price: 150,  quantity: 2},
  {  name : 'groceries',  price: 500,  quantity: 1},
  {  name : 'toolkit',  price: 300,  quantity: 4},
  {  name : 'medicines',  price: 1000,  quantity: 10},
]

console.log(calculateTotal(cartArr))

module.exports = calculateTotal;
