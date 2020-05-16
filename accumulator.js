const joinElements = (arr, joinString) => {
  const recursive = (idx, result) => {
    result += arr[idx];
    if (idx === arr.length - 1) {
      return result;
    } else {
      return recursive(idx + 1, result + joinString);
    }
  };

  return recursive(0, "");
};

console.log("Join String", joinElements(["s", "cr", "t", "cod", ":) :)"], "e"));
