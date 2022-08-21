// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

nums = [3, 2, 1];

var thirdMax = function (nums) {
    
    let unique = [...new Set(nums)];
  
  if(unique.length===1){
      return unique[0]
  }
  
if (unique.length < 3) {
  return Math.max(unique[0], unique[1]);
}



let first = unique[0],
  second = -Infinity,
  third = -Infinity;

for (let i = 1; i < unique.length; i++) {
  if (unique[i] > first) {
    third = second;
    second = first;
    first = unique[i];
  } else if (unique[i] > second) {
    third = second;
    second = unique[i];
  } else if (unique[i] > third) {
    third = unique[i];
  }
}

return third;
};

console.log(thirdMax(nums));
