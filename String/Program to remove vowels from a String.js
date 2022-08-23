
// Given a string, remove the vowels from the string and print the string without vowels. 

// Examples: 

Input = "welcome to geeksforgeeks"
// Output : wlcm t gksfrgks

function removeVowel(string){

let vowel=["a","e","i","o","u","A","E","I","O","U"]

let answer=""

for(let i=0;i<string.length;i++){

    if(!vowel.includes(string[i])){
        answer=answer+string[i]
    }


}

return answer
}

console.log(removeVowel(Input))