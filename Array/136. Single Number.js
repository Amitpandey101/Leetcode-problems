// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(singleNumber(nums))
