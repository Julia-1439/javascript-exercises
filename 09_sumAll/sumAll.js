const sumAll = function(min, max) {
    // This sum function is not compatible with non-numeric, negative, 
    // and non-integer bounds
    for (arg of arguments) {
        if (typeof arg !== "number" || arg < 0 || 
            !Number.isInteger(arg))
            return "ERROR";
    }

    // Swap if the first number is larger than the second
    if (min > max) {
        [min, max] = [max, min];
    }

    let result = 0;
    for (let i = min; i <= max; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
