const divideAndSort = (number) => {
  let getString = number.toString();
  let getArr = getString.split("0");
  let sortNumber = getArr.map((x) => x.split("").sort().join(""));
  let finalNumber = sortNumber.join("");
  console.log(parseInt(finalNumber));
};

divideAndSort(5340987);
