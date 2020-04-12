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


// var r = adjust(5, toUpper, ['a', 'b', 'e', 'd']);

// console.log(r);

// function toUpper(s){
//     return s.toUpperCase();
// }

exports.adjust = adjust;