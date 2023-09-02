const reverseString = function(string) {
    let message = '';
    for(let i = string.length - 1; i >= 0; i--) {
        message += string.charAt(i);
    }
    return message;

    /* simpler solution
        return string.split("").reverse().join("");
    */
};

// Do not edit below this line
module.exports = reverseString;
