/**
 * Applies a function to the value at the given index of an array, returning a new copy of the array with the 
 * element at the given index replaced with the result of the function application.
 */

function adjust(index,fun,arr){
    var length = arr.length;
    if(index >= length || index < -length){
        return arr;
    }

    var start = index >= 0 ? 0 : length;
    index = start + index;

    var result = [...arr]
    result[index] = fun(arr[index])
    console.log(result);
    return result;
}


// var r = adjust(-5, toUpper, ['a', 'b', 'e', 'd', 'f', 'g']);

// console.log(r);

// function toUpper(s){
//     return s.toUpperCase();
// }

exports.adjust = adjust;