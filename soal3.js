const divideAndSort = (number) => {
  let getString = number.toString();
  let getArr = getString.split("0");
  let sortNumber = getArr.map((x) => x.split("").sort().join(""));
  let finalNumber = sortNumber.join("");
  console.log(finalNumber);
};

divideAndSort(5430987);
