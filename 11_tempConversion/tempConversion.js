// Convert a temperature in F to C rounded to 1 decimal place
const convertToCelsius = function(tempF) {
  const roundingFactor = 10;
  return Math.round(
    ((tempF - 32) * 5/9) * roundingFactor
  ) / roundingFactor;
};

// Convert a temperature in F to C rounded to 1 decimal place
const convertToFahrenheit = function(tempC) {
  const roundingFactor = 10;
  return Math.round(
    (tempC * 9/5 + 32) * roundingFactor
  ) / roundingFactor;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
