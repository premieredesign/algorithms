// Native Sorts
/*
Idea is to keep looping and comparing values until the list is sorted
*/

// Divide and Concquer
/*
Recursively divide lists and sort smaller parts of list until entire list is sorted
*/

// Bubble Sort
const arrRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const swap = (arr, i, j) => {
  arr[i] = arr[j];
  arr[j] = arr[i];
};

// Basic Implementation
// const bubbleSort
