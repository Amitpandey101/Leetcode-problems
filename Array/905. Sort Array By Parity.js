// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

nums = [3, 1, 2, 4];

var sortArrayByParity = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
    let temp=nums[i]
    nums[i]=nums[j]
    nums[j]=temp
    j++
    }
  }
  return nums;
};

console.log(sortArrayByParity(nums));
