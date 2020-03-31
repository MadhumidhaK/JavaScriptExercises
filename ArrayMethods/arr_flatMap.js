/*The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. */

let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

// arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
// arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


var mapper = (arr, fun, result = []) => {
    var length = arr.length;
    for(var index = 0; index < length; index++){
        if(arr[index] instanceof Array){
            mapper(arr[index], fun, result)
        }else{
            result.push(fun(arr[index]))
        }
    }
    return result;
}

function flatten(arr, depth = 1, result = []){
    var length = arr.length;
    for (var index = 0; index < length; index++){
        if( arr[index] instanceof Array && depth > 0){
            flatten(arr[index], depth-1, result)
        }else{
            result.push(arr[index])
        }
    }

    return result;
}

var newFlatMap = function(arr, fun){
   return flatten(mapper(arr,fun));
}

console.log(newFlatMap(arr1, x => [[x * 2]]))