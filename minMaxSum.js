// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const testArr = [1, 2, 3, 4, 5];

// I decided to bubble sort everything first then just removing the first or last index in order to calculate the minimum and maximum sum.
// I very well could've just used '.sort' but this was prior to really learning it

function miniMaxSum(arr) {
  let totalSum = 0;
  let minSum = 0;
  let maxSum = 0;
  let largeNum;
  let smallNum;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        largeNum = arr[j];
        smallNum = arr[j + 1];
        arr[j] = smallNum;
        arr[j + 1] = largeNum;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  minSum = totalSum - arr[arr.length - 1];
  maxSum = totalSum - arr[0];

  console.log(minSum, maxSum);
}

miniMaxSum(testArr)