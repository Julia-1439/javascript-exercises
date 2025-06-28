const fibonacci = function(index) {
    index = +index;
    
    if (index < 0) return "OOPS";
    if (index === 0) return 0;
    if (index === 1 || index === 2) return 1;

    let [secondPrev, firstPrev] = [1, 1];
    for (let i = 0; i < index - 2; i++) {
        const curr = secondPrev + firstPrev;
        secondPrev = firstPrev;
        firstPrev = curr;
    }

    return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;
