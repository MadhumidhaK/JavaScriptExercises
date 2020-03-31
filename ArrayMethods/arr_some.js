/*The some() method tests whether at least one element in the array passes the
 test implemented by the provided function. It returns a Boolean value.  */


const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));


function newSome(arr, fun){
    var length = arr.length;
    for(var index = 0; index < length; index++){
        if(fun(arr[index])){
            return true;
        }
    }
    return false;
}

console.log(newSome(array, element => element % 2 == 10))