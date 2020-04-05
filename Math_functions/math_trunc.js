function newTrunc(num){
    if(typeof num !== "number"){
        return NaN
    }
    var numStr = num.toString();
    var decimalIndex = numStr.indexOf('.'); 
    if(decimalIndex < 0 ){
        return num;
    }
    num = parseInt(numStr.substring(0, decimalIndex))
    return num;
}


console.log(newTrunc(13.37));

console.log("newTrunc(42.84) = " + newTrunc(42.84));
console.log("newTrunc(0.123) = " + newTrunc(0.123));;
console.log("newTrunc(-0) = "  + newTrunc(-0));
console.log("newTrunc(.34) = " + newTrunc(.34));
console.log("newTrunc(-.75) = " + newTrunc(-12.75));
console.log("newTrunc(12) = " +newTrunc(12));
console.log("newTrunc('foo') = " + newTrunc('foo'));