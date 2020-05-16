const uniArr = [1, 2, 3];

const isUnique = (arr) => {
  let result = false;
  const breadCrumb = {};

  for (let i = 0; i < arr.length; i++) {
    if (breadCrumb[arr[i]]) {
      result = false;
    } else {
      breadCrumb[arr[i]] = true;
      result = true;
    }
  }
  console.log("Bread", breadCrumb);
  return result;
};

console.log("Uni", isUnique(uniArr));
