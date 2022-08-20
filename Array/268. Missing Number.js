// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

nums = [3, 0, 1];

var missingNumber = function (nums) {
  let n = nums.length;
  let sum1 = (n * (n + 1)) / 2;

  let sum2 = nums.reduce((a, b) => a + b);

  return sum1 - sum2;
};
console.log(missingNumber(nums));
