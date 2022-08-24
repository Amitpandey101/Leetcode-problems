// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// s = "anagram", t = "nagaram"
s = "rat", t = "car"

var isAnagram = function(s, t) {
    if(s.length !=t.length){
        return false
    }
    let map=new Map()
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }else{
            map.set(s[i],1)
        }
    }

    for(let i=0;i<t.length;i++){
        if(map.has(t[i])){
            map.set(t[i],map.get(t[i])-1)
        }else{
            map.set(t[i],1)
        }
    }
    let ans=true

    for(let value of map.values()){
        if(value>=1){
            ans=false
        }
    }

return ans

};

console.log(isAnagram(s,t))