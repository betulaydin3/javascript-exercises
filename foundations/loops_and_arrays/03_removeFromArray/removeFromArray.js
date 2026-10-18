const removeFromArray = function(first, ...others) {
    let result = first.filter(element => !others.includes(element));
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
