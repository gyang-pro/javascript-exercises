const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9);
  if(!Number.isInteger(cTemp)) {
    return +cTemp.toFixed(1);
  }
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * (9/5) + 32;
  if(!Number.isInteger(fTemp)) {
    return +fTemp.toFixed(1);
  }
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
