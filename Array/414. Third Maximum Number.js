// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

nums = [3,2,1]

var thirdMax = function(nums) {

    if(nums.length<3){
        return Math.max(nums[0],nums[1])
    }

    nums.sort((a,b) => b-a)

    let unique=[...new Set(nums)]
    if(unique.length<3){
        return Math.max(unique[0],unique[1])
    }
    else{
        return unique[2]
    }



    
};

console.log(thirdMax(nums))