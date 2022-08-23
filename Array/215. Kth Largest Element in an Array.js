// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4

var findKthLargest = function (nums, k) {

    nums.sort((a, b) => b - a)
    // [6, 5, 5, 4, 3,3, 2, 2, 1]

  

    return nums[k - 1]


};

console.log(findKthLargest(nums, k))