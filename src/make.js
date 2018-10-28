const sum = (a, b) => a + b;
function make(...a) {
  let array = a;
  let result = 0;

  function x(c, ...b) {
    if (typeof c !== 'number') {
      result = array.reduce(sum);
      return result;
    }
    array = array.concat(c, ...b);
    return x;
  }
  return x;
}
// console.log(make(15)(34, 21, 666)(41)(sum));
