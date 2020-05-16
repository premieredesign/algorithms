### Space and Time Complexity

```
Space complexity:  is how much `memory` is used.

Time complexity: is how much primitive operations are executed

Examples:
Let's say we want to find out the min and max for kayak hotels
 possible solutions:
    1. Nested loops and the compare each value to see if it is min or max <- this is n2 O(n2)
    2. Create 1 loop and check if the previous item is less than the current item <- this is 2n O(n)
    3. Create the array as sorted and then it will have min and max <- this in O(1)
```

### Native Methods

```js
const arr = [1, 2, 3];
arr.pop(); // => [1,2] this is constant O(1)
```

### BigO Notation

```
1. Constant: O(1)
2. Log: O(logn)
3. Linear: O(n)
4. Quadratic: O(n^2)
5. Exponential: O(k^n)

Reference Table:
1. Running a statement: O(1)
2. Value look-up on an array, object, variable: O(1)
3. Loop that cuts problem in half on every iteration: O(logn)
4. Looping through the values in an array: O(n)
5. Doubled nested loops: O(n^2)
6. Triple nested loops: O(n^3)
```
