/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndx = 0;
  let endIndx = array.length - 1;
  let middleIndx;
  while (startIndx !== middleIndx) {
    middleIndx = Math.floor((startIndx + endIndx) / 2);
    if (array[middleIndx] === value) {
      return middleIndx;
    }
    if (value < array[middleIndx]) {
      endIndx = middleIndx - 1;
    } else {
      startIndx = middleIndx + 1;
    }
  }
  return middleIndx;
}
module.exports = findIndex;
