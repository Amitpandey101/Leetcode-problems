// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

s = "aabb"

var firstUniqChar = function (s) {
  let string = s.split("");
  let map = new Map();

  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i])) {
      map.set(string[i], map.get(string[i]) + 1);
    } else {
      map.set(string[i], 1);
    }
  }


  for (let i = 0; i < string.length; i++) {
    if (map.get(string[i])===1) {
        return i

    } 
  }
return -1
};

console.log(firstUniqChar(s));
