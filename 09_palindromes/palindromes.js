const palindromes = function (str) {
    let punctuation = /[^a-z0-9]/g; //any single character BUT a-z and 0-9
    str = str.toLowerCase().replace(punctuation, '');
    let str2 = str.split('').reverse().join('');
    return str === str2;
};

// Do not edit below this line
module.exports = palindromes;
