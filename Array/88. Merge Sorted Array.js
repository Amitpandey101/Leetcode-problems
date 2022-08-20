// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);

  return nums1;
};

console.log(merge(nums1, m, nums2, n));

//array.splice(2,2)
// At position 2, remove 2 items:
// fruits.splice(2, 2);

// let months = ["January", "February", "Monday", "Tuesday"];
// let days = months.splice(2);

// console.log(days); // ["Monday", "Tuesday"]

// The splice() method needs at least one parameter, which is the start index where the splice operation starts. In the code above, the number 2 is passed to the method, which means splice() will start removing elements from index 2.
