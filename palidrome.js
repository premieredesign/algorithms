function countPalindromes(s) {
  // Write your code here
  let reverseIt = s.split("");
  let arr = [];
  const checkIt = (i) => {
    if (i <= reverseIt.length - i) {
      // arr.push(reverseIt[i]);
      console.log("i ", i);
      console.log("desc i ", reverseIt.length - i);
      checkIt(i + 1);
    }
  };
  checkIt(0);
}

countPalindromes("tacocat");
