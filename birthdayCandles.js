// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.

const birthdayCandles = [3, 2, 1, 3]

const birthdayCakeCandles = (candles) => {
  let tally = 0;
  console.log(candles);

  candles.sort((a, b) => a - b);

  console.log(candles);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == candles[candles.length - 1]) {
      tally += 1;
      console.log(tally);
    }
  }
  return tally;
}

birthdayCakeCandles(birthdayCandles)
