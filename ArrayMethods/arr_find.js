/*The find() method returns the value of the first element in the provided array that satisfies the provided testing function.*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

var newFind = function(arr, fun){
    var length = arr.length;
    for(var index = 0; index < length; index++){
        if(fun(arr[index])){
            return arr[index];
        }
    }
    return null;
}

console.log(newFind(array1, function(element) {
    return element > 10;
}))