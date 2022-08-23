
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

nums = [-7,-3,2,3,11]

var sortedSquares = function(nums) {

    let ans=[]

    //pointers

    let left_pointer=0;
    let right_pointer=nums.length-1


//now traversing backwards

    for(let i=nums.length-1;i>=0;i--){
     if(Math.abs(nums[right_pointer])>Math.abs(nums[left_pointer])){
     ans[i]=nums[right_pointer]**2
     right_pointer--
}else{

    ans[i]=nums[left_pointer]**2
    left_pointer++
}

    }

    return ans


    
};

console.log(sortedSquares(nums))
 
