const removeFromArray = function (array,...remove) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(!remove.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

/* more advanced way
const removeFromArray = function(array, ...args) {
   return array.filter(val => !args.includes(val))
 }
*/

// Do not edit below this line
module.exports = removeFromArray;