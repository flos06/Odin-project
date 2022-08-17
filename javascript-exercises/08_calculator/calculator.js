const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(arr) {
  result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n1) {
	if (n1 == 1 || n1 == 0) {
    return 1;
  } else {
    return n1 * factorial(n1 - 1)
  }
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
