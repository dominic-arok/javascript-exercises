const convertToCelsius = function(temp) {

  let convertedTemp = ((temp - 32) * 5) / 9;
  let roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;

};

const convertToFahrenheit = function(temp) {

  let convertedTemp = ((temp * 9) / 5) + 32;
  let roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
