const reverseString = function(string) {

    const splitArray = string.split("");
    let reversedArray = [];
    for (let i = splitArray.length-1; i >= 0; i--) {
        reversedArray.push(splitArray[i]);
    }
    const reversedString = reversedArray.join('');
    return reversedString;
    

};

// Do not edit below this line
module.exports = reverseString;
