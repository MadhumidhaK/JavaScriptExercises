/* The findIndex() method returns the index of the first element in the array that satisfies 
the provided testing function. 
Otherwise, it returns -1, indicating that no element passed the test.*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.findIndex(element => element > 10);

console.log(found);

var newFindIndex = function(arr, fun){
    var length = arr.length;
    for(var index = 0; index < length; index++){
        if(fun(arr[index])){
            return index;
        }
    }
    return -1;
}

console.log(newFindIndex(array1, function(element) {
    return element > 10;
}))