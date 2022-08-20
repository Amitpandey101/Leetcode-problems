// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
nums = [2,2,1,1,1,2,2]
var majorityElement = function(nums) {
    let map=new Map()
    let len=nums.length
    for(let i=0;i<len;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    let majorityElement=len/2
    
    for(let [key,value] of map){

        if(value > majorityElement){
            return key
        }
    }
    
};

console.log(majorityElement(nums))