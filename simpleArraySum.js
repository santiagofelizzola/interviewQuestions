// Given an array of integers, find the sum of its elements.

const testArr = [1, 2, 3, 4, 10, 11]

const simpleArraySum = (ar) => {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
    console.log(sum, ar[i]);
  }
  return sum;
}

simpleArraySum(testArr)