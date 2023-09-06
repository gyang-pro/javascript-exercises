const fibonacci = function(sequenceNum) {
    if(sequenceNum < 0) {
        return "OOPS";
    }

    let first = 1;
    let second = 1;
    let current = 1;
    for(let i = 2; i < sequenceNum; i++) {
        first = second;
        second = current;
        current = first + second;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
