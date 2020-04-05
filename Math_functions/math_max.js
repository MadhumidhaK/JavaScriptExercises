function newMax(...arr){
    var length = arr.length;
    // console.log(arr)
    if(length == 0){
        return 0;
    }
    var max = arr[0];
    arr.forEach(num => {
        if(num > max){
            max = num;
        }            
    });
    return max;
}


console.log(newMax(1,-24,6,23,1,53,3,4))