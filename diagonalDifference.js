// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Ex.
// 1 2 3
// 4 5 6
// 9 8 9  

const testArr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

const diagonalDifference = (arr) => {
    let primeD = 0
    let secD = 0
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i][i]);
        primeD += arr[i][i];
        console.log(primeD)
    }
    for(let i = 0; i < arr.length; i++) {
        secD += arr[i][arr.length - 1 - i]
        console.log(secD)
    }
    let difference = Math.abs(primeD - secD);
    console.log(difference)
    return difference
    
}

diagonalDifference(testArr)