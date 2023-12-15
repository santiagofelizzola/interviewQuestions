// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: 
// - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const testTime = "07:05:45PM"

const timeConversion = (s) => {
  console.log(typeof s);
  let letters = s.slice(s.length - 2);
  let nums = s.slice(0, s.length - 2);
  console.log(letters);
  console.log(nums);

  nums = nums.split(":");

  if (letters == "PM" && Number(nums[0]) < 12) {
    console.log(nums);
    nums[0] = 12 + Number(nums[0]);
    console.log(nums);
  }

  // It originally didn't pass because 12AM would still continue as 12 instead of 00
  else if (letters == "AM" && nums[0] == "12") {
    nums[0] = "00";
  }

  // It failed a second time due to the fact that 12pm would convert to 24. It needs to stay 12. 
  // Fixed it by adding an && to first 'if statement'

  let result = nums[0] + ":" + nums[1] + ":" + nums[2];
  console.log(result);

  return result;
}

timeConversion(testTime)
