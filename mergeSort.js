/*
Steps:
1. Create function to sort array -> will be recursive.
2. Create function to merge array items
*/

const merge = (left, right) => {
  let results = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      results.push(left[leftIdx]);
      leftIdx++;
    } else {
      results.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return results.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

const sort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(sort(left), sort(right));
};

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3, -1];

console.log(sort(list));
