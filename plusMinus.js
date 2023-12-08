// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems.
// The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

const testArr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
  let posNum = 0;
  let negNum = 0;
  let zeroNum = 0;
  let arr2 = [];
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] < 0) {
      posNum += 1;
    } else if (arr[i] > 0) {
      negNum += 1;
    } else {
      zeroNum += 1;
    }
    // console.log(posNum, negNum, zeroNum)
  }
  posNum /= arr.length;
  negNum /= arr.length;
  zeroNum /= arr.length;
  console.log(negNum.toFixed(6));
  console.log(posNum.toFixed(6));
  console.log(zeroNum.toFixed(6));
  return arr2;
}

plusMinus(testArr)
