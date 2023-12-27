function countOccurrences(arr) {
    // Create an object to store the count of each integer
    let countMap = {};
  
    // Iterate through the array
    arr.forEach(function(num) {
      // If the number is already a key in the countMap, increment its count
      if (countMap[num]) {
        countMap[num]++;
      } else {
        // If the number is not a key, initialize its count to 1
        countMap[num] = 1;
      }
    });
  
    // Convert the countMap object to an array of objects
    let result = Object.keys(countMap).map(function(key) {
      return { value: parseInt(key), count: countMap[key] };
    });
  
    return result;
  }
  
  // Example usage:
  let numbers = [1, 2, 3, 2, 4, 1, 5, 1];
  let occurrences = countOccurrences(numbers);
  console.log(occurrences);
  