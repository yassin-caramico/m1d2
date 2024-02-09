let totalShoppingCard = 60;
let shippingcost = 0;
if (totalShoppingCard > 50) {
  shippingcost = 0;
} else {
  shippingcost = 10;
}
let totalCost = totalShoppingCard + shippingcost;
console.log("il costo totale è:" + totalCost + "euro");
