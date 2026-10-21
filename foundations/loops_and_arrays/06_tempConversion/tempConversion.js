const convertToCelsius = function(number) {
  let fahrenheit = 0;
  fahrenheit = (number - 32) * 5/9;
  let result = Number(fahrenheit.toFixed(1));
  return result;
};

const convertToFahrenheit = function(number) {
  let celsius = 0;
  celsius = (number * 9/5 + 32);
  let result = Number(celsius.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
