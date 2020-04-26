/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't.
 */

function all(fun){
    return function(arr){
        let index = 0;
        let length = arr.length
        while(index < length){
            if(!fun(arr[index], index, arr)){
                return false
            }
            index++;
        }
        return true;
    }
}

console.log(all((e) => e % 2 == 0)([30, 2, 14, 9]))

var result = all((e,i,arr) => e == arr.length)([3,3,3])
console.log(result);


// const equals3 = R.equals(3);
// R.all((e) => e % 2 == 1)([3, 3, 3, 3]); //=> true
//R.all(equals3)([3, 3, 1, 3]); //=> false