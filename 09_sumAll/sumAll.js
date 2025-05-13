const sumAll = function(num1, num2) {
    // Return "ERROR" on non-integers, non-numbers, and negative numbers
    

    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
