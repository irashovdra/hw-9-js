let goods = prompt("Enter products quantity");
let productPrice = Math.round(Math.random() * (5000 - 500) + 500);
const totalPrice = goods * productPrice;
console.log(totalPrice);
