// Expects list to be assorted
const sortedArr = [2, 6, 7, 90, 103];
const unSortedArr = [14, 32, 2, 6, 7, 90, 103];

const sort = (arr, item) => {
  let mid = Math.floor(arr.length - 1 / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  if (arr.length === 1) return arr;

  let newSortedArr = arr.concat(left.slice(0, mid).concat(right.slice(mid)));
  return search(newSortedArr, item, 0, arr.length - 1);
};

const search = (arr, x, min, max) => {
  let mid = Math.floor((min + max) / 2);
  if (arr[mid] === x) return mid;
  if (min > max) return -1;

  if (arr[mid] > x) {
    return search(arr, x, min, mid - 1);
  } else {
    return search(arr, x, mid + 1, max);
  }
};
console.log("Unsorted Binary Search", sort(unSortedArr, 90));
// console.log("Sorted Binary Search", binarySearch([2, 6, 7, 90, 103], 90));
console.log(
  "Binary using recursive",
  search(sortedArr, 90, 0, sortedArr.length - 1)
);
