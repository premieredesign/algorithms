const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
  // Return value if it's in cache
  if (cache[c]) return cache[c];

  let minCoins = -1;

  // Find the best coins
  coins.forEach((coin) => {
    if (c - coin >= 0) {
      let currMinCoins = makeChange(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  // Save value in cache
  cache[c] = minCoins + 1;
  return cache[c];
};
