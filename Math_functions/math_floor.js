function newFloor(num){
    if(num == 0){
        return num;
    }
    var numStr = num.toString();
    if(numStr.indexOf('.') == -1){
        return num;
    }
    if(num < 0){
        num = num -1;
        numStr = num.toString();
    }
    
    return parseInt(numStr.substring(0, numStr.indexOf('.')))
}


console.log(newFloor(25.7))
console.log(newFloor(25.2))
console.log(newFloor(-158.7))
console.log(newFloor(-158.2))
console.log(newFloor(0))
console.log(newFloor(-56))