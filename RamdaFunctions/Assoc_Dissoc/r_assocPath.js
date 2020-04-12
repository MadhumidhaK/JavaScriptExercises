var has = require('./helper').has;
var isNull = require('./helper').isNull;
var isArray = require('./helper').isArray;
var assoc = require('./r_assoc').assoc;

function assocPath(path, val, obj){
    var length = path.length;
    if(length === 0){
        return val;
    }
    var idx = path[0];
    if(length > 1){
        var nextObj = !isNull(obj) && has(obj,idx) ? obj[idx] : typeof path[1] === "number" ? [] : {};
        var val = assocPath(path.slice(1), val, nextObj);
    }

    if(typeof idx === "number" && isArray(obj)){
        var arr = [].concat(obj);
        arr[idx] = val;
        return arr;
    }
    else{
        return assoc(idx, val, obj);
    }
}

var oldObj = {c: {a: { ac : 50}}};
var resultObj = assocPath(['c', 'a', 'c', 2,'s'], 42, oldObj);
console.log(resultObj);
console.log(resultObj.c.a.c)
console.log(oldObj)