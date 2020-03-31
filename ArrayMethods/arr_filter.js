/* The filter() method creates a new array with all elements that pass the test implemented by the provided function*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const r = words.filter(word => word.length > 6);

console.log(r);

function newFilter(arr, fun){
    var length = arr.length;
    var result = [];
    for(var index = 0; index < length; index++){
        if(fun(arr[index])){
            result.push(arr[index]);
        }
    }
    return result;
}

console.log(newFilter(words, word => word.length > 6))