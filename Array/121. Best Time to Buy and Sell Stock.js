// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    maxPrice = Math.max(maxPrice, prices[i] - minPrice);
  }
  return maxPrice;
};

console.log(maxProfit(prices));
