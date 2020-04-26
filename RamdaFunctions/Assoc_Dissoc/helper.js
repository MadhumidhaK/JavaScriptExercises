var adjust = require('./r_adjust').adjust;

function has(obj,prop){
    return Object.prototype.hasOwnProperty.call(obj, prop);
}


function isNull(obj){
    isnull = obj === null || obj === undefined;
    // console.log('isNull');
    // console.log(obj)
    // console.log(isnull);
    return isnull;
}


function isArray(obj){
    return obj instanceof Array;
}

function always(val){
    return function(){
        return val;
    }
}

function update(idx, val, arr){
    console.log('in update')
    console.log(idx);
    console.log(val);
    console.log(arr);
    if(idx >= arr.length || idx < -arr.length){
        return arr
    }
    return adjust(idx, always(val), arr)
}

exports.has = has;
exports.isNull = isNull;
exports.isArray = isArray;
exports.update = update;
exports.always = always;