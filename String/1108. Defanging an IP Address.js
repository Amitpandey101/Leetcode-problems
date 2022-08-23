// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

address = "1.1.1.1"

//solution 1

var defangIPaddr = function(address) {
    let answer=address.replaceAll(".","[.]")
    return answer
    
};


//solution 2

var defangIPaddr = function(address) {
    let answer=""
   let addressArray=address.split("")
   let len=addressArray.length

   for(let i=0;i<len;i++){
    if(addressArray[i]==="."){
       answer=answer+"[.]"
    }else{
        answer=answer+addressArray[i]
    }

   }
    return answer
};


console.log(defangIPaddr(address))