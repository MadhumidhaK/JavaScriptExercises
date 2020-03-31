/*The every() method tests whether all elements 
in the array pass the test implemented by the provided function. 
It returns a Boolean value. */

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

var newEvery = (arr, fun) => {
    var length = arr.length
    var result = true;
    for(var index = 0; index < length; index++){
        if(!fun(arr[index])){
            result = false;
            break;
        }
    }
    return result
}

console.log(newEvery(array1, isBelowThreshold))