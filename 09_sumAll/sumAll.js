const sumAll = function(num1, num2) {
    // Return "ERROR" on non-integers, non-numbers, and negative numbers
    for (arg of arguments) {
        if (typeof arg !== "number" || arg < 0 || 
            Math.floor(arg) !== arg)
            return "ERROR";
    }
    // Swap if the first number is larger than the second
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
