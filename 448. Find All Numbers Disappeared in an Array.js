// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums

nums = [4, 3, 2, 7, 8, 2, 3, 1];

// var findDisappearedNumbers = function (nums) {
//   let ans = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (!nums.includes(i)) {
//       ans.push(i);
//     }
//   }
//   return ans;
// };
//TC =>O(N^2)

var findDisappearedNumbers = function (nums) {
  //by using map

  let ans = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      ans.push(i);
    }
  }
  return ans;
};

console.log(findDisappearedNumbers(nums));
