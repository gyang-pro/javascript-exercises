/* Leap years have to be divisible by 4 and not by 100 unless they're
   divisible by 400
*/
const leapYears = function(year) {
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)
};

// Do not edit below this line
module.exports = leapYears;
