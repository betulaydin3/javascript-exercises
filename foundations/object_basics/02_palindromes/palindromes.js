const palindromes = function (text) {
    const woord = text;
    const lower = woord.toLowerCase();
    const comma = lower.replaceAll(",", "");
    const exclamation = comma.replaceAll("!", "");
    const space = exclamation.replaceAll(" ", "");
    const dot = space.replaceAll(".", "");
    const letters = dot.split("");
    const omgedraaid = letters.reverse();
    const terug = omgedraaid.join("");
    terug.replaceAll("-", "", " ");
    return terug === dot;
};

// Do not edit below this line
module.exports = palindromes;
