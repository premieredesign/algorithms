// const recurseIt = (start, end) => {
//   const recursioning = (i) => {
//     console.log("~~~ Looping through recursion ~~~", i);
//     if (i < end) {
//       recursioning(i + 1);
//     }
//   };
//   recursioning(start);
// };

// recurseIt(1, 10);

// Recursive Factorial & Memoize
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      return (cache[n] = fn(n));
    }
  };
};

const factorial = memoize((x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
});

console.log(factorial(5));
factorial(6);
