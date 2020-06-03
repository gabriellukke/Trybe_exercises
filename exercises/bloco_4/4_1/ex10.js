let costPrice = 50;
let sellPrice = 100;
let profit = 0;

if (costPrice > 0 || sellPrice > 0) {
  profit = (sellPrice - costPrice * 1.2) * 1000;
  console.log("When selling one thousand products the profit will be: ", profit);
}
else (
  console.log("The price of the cost or of the sell have to be more than 0!")
);