function cond(...funPairs){
    return function(val){
        var fun = funPairs.find(pair => pair[0](val) === true);
        return fun[1](val)
    }
}

function equals(val){
    return function(ele){
        return val === ele;
    }
}

function always(val){
    return function(){
        return val;
    }
}

function T(){
    return true;
}

fn = cond([equals(0), always('Water freezes at 0°C')], 
        [equals(100), always('Water boils at 100°C')],
        [T, temp => 'nothing special happens at ' + temp + '°C'])

console.log(fn(109))
console.log(fn(100))
console.log(fn(0))