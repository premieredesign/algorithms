const linearSearch = (list, item) => {
  list.forEach((v, k) => {
    if (item === v) {
      return v;
    }
  });
};
