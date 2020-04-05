function newRound(num){
    if(num == 0){
        return num;
    }
    var numStr = num.toString();
    var dotIndex = numStr.indexOf('.');
    if(dotIndex == -1){
        return num;
    }
    if(parseInt(numStr[dotIndex + 1]) >=5 ){
        numStr = (num+1).toString()
    }

    

   
    return parseInt(numStr.substring(0, numStr.indexOf('.')))
}


console.log(newRound(25.7))
console.log(newRound(25.2))
console.log(newRound(-158.7))
console.log(newRound(-158.2))
console.log(newRound(0))
console.log(newRound(50))