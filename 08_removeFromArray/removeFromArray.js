const removeFromArray = function(arr, ...toRemove) {
    for (element of toRemove) {
        let i = 0;
        while (i < arr.length) {
            if (arr[i] !== element){
                i++;
                continue;
            }
            arr.splice(i, 1);
        }
    }
    return arr;
};

console.log(removeFromArray([1,2,2,3], 2));

// Do not edit below this line
module.exports = removeFromArray;
