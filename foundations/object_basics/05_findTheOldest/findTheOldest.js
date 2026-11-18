const findTheOldest = function (people) {
    let age = people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return age[0];
};


// Do not edit below this line
module.exports = findTheOldest;
