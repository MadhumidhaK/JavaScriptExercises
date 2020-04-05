function newAbs(num){
    if(typeof num !== "number"){
        return NaN
    }
    return  num >= 0 ? num : -num; 
}

console.log(newAbs(30));

console.log(newAbs(-30));

console.log(newAbs(0));