// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

nums = [0,1,0,3,12]

var moveZeroes = function(nums) {
let j=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
            j++
        }

    }
    return nums
    
};

console.log(moveZeroes(nums))