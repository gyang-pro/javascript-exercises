const findTheOldest = function(array) {
    let newArray = array.map(person => {
        if(!person.yearOfDeath) {
            person.yearOfDeath = (new Date()).getFullYear();
        }
        return person;
    });

    newArray.sort((a,b) => {
        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath-b.yearOfBirth;
        return ageB - ageA;
    });
    return newArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
