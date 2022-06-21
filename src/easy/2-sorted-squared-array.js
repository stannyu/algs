/**
 * O(nlogn) time | O(n) space
 * @param array
 * @returns {*[]}
 */
const sortSquaredArray = (array) => {
  let squaredArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    squaredArray[i] = value * value;
  }

  squaredArray.sort((a, b) => a - b);
  return squaredArray;
};

const arr = [-7, -5, -4, 2, 2, 3, 6, 8, 9];

console.log(sortSquaredArray(arr));

/**
 * O(n) time | O(n) space
 * @param array
 * @returns {*[]}
 */
const sortSquaredArrayOpt = (array) => {
  let startIdx = 0;
  let endIdx = array.length - 1;
  let pointer = endIdx;

  const resultArray = [];

  while (pointer >= 0) {
    let startIdxMod = Math.abs(array[startIdx]);
    let endIdxMod = Math.abs(array[endIdx]);

    if (endIdxMod > startIdxMod) {
      resultArray.unshift(array[endIdx] * array[endIdx]);
      endIdx -= 1;
    }

    if (startIdxMod >= endIdxMod) {
      resultArray.unshift(array[startIdx] * array[startIdx]);
      startIdx += 1;
    }

    pointer--;
  }

  return resultArray;
};

console.log(sortSquaredArrayOpt(arr));
