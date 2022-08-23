// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

nums = [6, 5, 4, 4];

var isMonotonic = function (nums) {
  let monotonic_inc = true;
  let monotonic_dec = true;

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      monotonic_inc = false;
    } else if (nums[i - 1] < nums[i]) {
      monotonic_dec = false;
    }
  }

  if (monotonic_inc || monotonic_dec) {
    return true;
  }

  return false;
};

console.log(isMonotonic(nums))