function ifElse(fun, onTrue, onFalse){
    return function(val){
        if(fun(val)){
            return onTrue(val)
        }else{
            return onFalse(val)
        }
    }
}


function onTrueFun(val){
    return val.toUpperCase() + " is Valid";
}

function onFalseFun(val){
    return val.toLowerCase() + " is Invalid";
}

function validate(val){
    return val.indexOf('/') === -1;
}

var isValid = ifElse(validate, onTrueFun, onFalseFun)
console.log(isValid('Fan'));
console.log(isValid('Fan///'));