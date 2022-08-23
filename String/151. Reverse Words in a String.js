// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

s = "a good   example"

var reverseWords = function(s) {

    s.trim()
    let string=s.split(" ")
  let s1=string.filter(someValue => someValue )
  return s1.reverse().join(" ")
    
};

console.log(reverseWords(s))