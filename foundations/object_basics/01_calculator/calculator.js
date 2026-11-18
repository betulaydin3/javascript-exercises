const add = function (a, b) {
  const addResult = a + b;
  return addResult;
};

const subtract = function (a, b) {
  const substractResult = a - b;
  return substractResult;
};

const sum = function (numbers) {
  return numbers.reduce((total, n) => total + n, 0);
};

const multiply = function (numbers) {
return numbers.reduce((total, n) => total * n, 1)
};

const power = function (a, b) {
  const powerResult = a ** b;
  return powerResult;
};

const factorial = function (n) {
  let result = 1;

for (let i = 1; i <= n; i++) {
    result = result * i;
}
return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
