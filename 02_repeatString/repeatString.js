const repeatString = function(string, num) {
    let i = 0;
    let message = '';

    if(num < 0) {
        return 'ERROR';
    }
    
    while(i < num){
        message += string;
        i++;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
