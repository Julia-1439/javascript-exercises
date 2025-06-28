const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(operands) {
	return operands.reduce((result, num) => result + num, 0);
};

const multiply = function(operands) {
	return operands.reduce((result, num) => result * num);  
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	let result = 1; 
  for (let i = 1; i <= n; i++) {
    result *= i;
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
