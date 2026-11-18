const fibonacci = function (n) {
    if (n < 0 || Number.isNaN(n) || typeof n !== "number") {
        return "OOPS";
    }
    if (n === 0) {
        return n
    }
    let a = 1;
    let b = 1;
    for (let i = 0; i < n - 2; i++) {
        const volgende = a + b;
        a = b;
        b = volgende;
    }
    return b;
};
// Do not edit below this line
module.exports = fibonacci;