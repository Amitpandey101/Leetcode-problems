// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.


nums1 = [4,9,5], nums2 = [9,4,9,8,4]

var intersection = function(nums1, nums2) {
  
    let map1 =new Map()
    for(let i=0;i<nums1.length;i++){
    if(map1.has(nums1[i])){
        map1.set(nums1[i],map1.get(nums1[i])+1)
    }else{
        map1.set(nums1[i],1)
    }

    } 
 let ans=[]
    for(let i=0;i<nums2.length;i++){
        if(map1.has(nums2[i])){
            ans.push(nums2[i])

        }else{
            continue
        }
    }

let unique= new Set(ans)

return [...unique]

    
};
console.log(intersection(nums1,nums2))