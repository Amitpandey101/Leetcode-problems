// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

(nums = [2, 7, 11, 15]), (target = 9);

function twoSum(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (map.has(difference)) {
      return [map.get(difference), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
console.log(twoSum(nums))
