function newCeil(num){
    if(num == 0){
        return num;
    }
    
    var numStr = num.toString();
    if(numStr.indexOf('.') == -1){
        return num;
    }
    
    if(num < 0){
        num = num - 1;
        numStr = num.toString();
    }

    return parseInt(numStr.substring(0, numStr.indexOf('.'))) + 1
}

console.log(newCeil(25.7))
console.log(newCeil(25.2))
console.log(newCeil(-158.7))
console.log(newCeil(-158.2))
console.log(newCeil(0))
console.log(newCeil(-56))