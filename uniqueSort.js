const uniArr = [1, 2, 3, 14, 23, 12, 10];

const uniquSort = (arr) => {
  const breadCrumb = {};
  const uni = [];

  for (let i = 0; i < arr.length; i++) {
    if (!breadCrumb[arr[i]]) {
      uni.push(arr[i]);
      breadCrumb[arr[i]] = true;
    }
  }

  return arr.sort((a, b) => a - b);
};

console.log("Unique", uniquSort(uniArr));
