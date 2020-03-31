/* he flat() method creates a new array with all sub-array elements
 concatenated into it recursively up to the specified depth. */

const arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat()); 
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat()); 
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr3.flat(2)); 
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity)); 

var newFlat = function(arr, depth = 1, result = []){
    var length = arr.length;
    for(var index = 0; index < length; index++){
        if(arr[index] instanceof Array && depth > 0){
            newFlat(arr[index], depth-1, result)
        }else{
            result.push(arr[index])
        }
    }
    return result;
}

console.log(newFlat(arr4,Infinity));