const cache = {};

const times10 = (x) => x * 10;

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log("Grab from cache");
    return cache[n];
  } else {
    console.log("Place in cache");
    return (cache[n] = times10(n));
  }
};

console.log("Memo", memoTimes10(9));
console.log("Memo", memoTimes10(9));
