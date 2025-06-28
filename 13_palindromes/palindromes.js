const palindromes = function (str) {
    // Disregard punctuation, word breaks, and uppercase letters in determining 
    // if str is a palindrome
    
    // Punctuation list obtained from:
    // https://github.com/remarkablemark/remarkablemark.github.io/blob/master/_posts/2019/2019-09-28-javascript-remove-punctuation.md#punctuation-marks
    // NOTE: an alternative is enumerating the alphanumeric characters and 
    // filtering by that instead! 
    const punctuation = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    const wordBreaks = " \n";

    // Clean the string
    str = str.toLowerCase();
    str = str
        .split("")
        .filter(
            (char) => !punctuation.includes(char) && !wordBreaks.includes(char)
        )
        .join("");

    // Reverse the string for comparison
    const reversedStr = str.split("").reverse().join("");

    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
