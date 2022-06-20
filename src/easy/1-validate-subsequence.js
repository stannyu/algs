/**
 * Time = O(N) | Space = O(1)
 * @param array
 * @param sequence
 * @returns {boolean}
 */
const validateSubsequence = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx += 1;
    }
    arrIdx += 1;
  }

  return seqIdx === sequence.length;
};

/**
 * Time = O(N) | Space = O(1)
 * @param array
 * @param sequence
 * @returns {boolean}
 */
const validateSubsequenceLoop = (array, sequence) => {
  let seqIdx = 0;

  for (let i = 0; i < array.length; i++) {
    if (seqIdx === sequence.length) {
      console.log("L");
      return true;
    }

    if (array[i] === sequence[seqIdx]) {
      seqIdx += 1;
    }

    console.log("seqIdx: ", seqIdx, i);
  }

  return seqIdx === sequence.length;
};

const mainArr = [3, 43, 55, 5, 2, -1, 6, 10, 7];
const seqArr = [3, 5, -1, 10];
const seqArrFalse = [3, 4, -1, 10];

const isValid = validateSubsequenceLoop(mainArr, seqArr);
console.log(isValid);
