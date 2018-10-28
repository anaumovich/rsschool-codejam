function sumOfOther(arr) {
  let sum = 0;
  const newArr = [];
  arr.forEach((currentValue) => { sum += currentValue; });
  arr.forEach((currentValue) => { newArr.push(sum - currentValue); });
  arr = newArr;
  return arr;
}
// console.log(sumOfOther([2, 3, 4, 1]))
