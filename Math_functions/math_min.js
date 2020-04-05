function newMin(...arr){
    var length = arr.length;
    // console.log(arr)
    if(length == 0){
        return 0;
    }
    var min = arr[0];
    arr.forEach(num => {
        if(num < min){
            min = num;
        }            
    });
    return min;
}


console.log(newMin(1,-24,6,23,1,53,3,4))