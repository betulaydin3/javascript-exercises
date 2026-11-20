const findTheOldest = function (people) {
    const nu = new Date().getFullYear();
    let age = people.sort((a, b) => ((b.yearOfDeath || nu) - b.yearOfBirth) - ((a.yearOfDeath || nu) - a.yearOfBirth));
    return age[0];

};

// Volgende stap: mensen zonder yearOfDeath (test 2 en 3)
// Idee: ontbreekt yearOfDeath? Gebruik dan het huidige jaar

// Do not edit below this line
module.exports = findTheOldest;
