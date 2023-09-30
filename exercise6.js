let goods = prompt("Enter products quantity");
let productPrice;
let totalPrice = 0;
for (let i = 1; i <= goods; i++) {
  productPrice = Math.round(Math.random() * (5000 - 500) + 500);
    console.log(productPrice, "productPrice"); 
    totalPrice += productPrice;
    console.log(totalPrice, "totalPrice");
}
console.log(totalPrice);
