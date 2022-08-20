// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

nums = [1,1,1,3,3,4,3,2,4,2]

var containsDuplicate = function(nums) {

    let map=new Map()

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    for(let value of map.values()){
        if(value >=2){
            return true
        }
    }
    return false
   
    
};
console.log(containsDuplicate(nums))

 