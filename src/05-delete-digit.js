/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = n.toString().split('').map((num) => +num);
  let maxNum = 0;
  numbers.forEach((elem, index) => {
    const shortNumbers = +numbers.filter((val, i) => i !== index).join('');
    if (maxNum < shortNumbers) {
      maxNum = shortNumbers;
    }
  });
  return maxNum;
}

module.exports = deleteDigit;
