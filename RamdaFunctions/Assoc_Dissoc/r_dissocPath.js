/*
    path- The path to the value to omit
    obj-  The object to clone

    Returns Object A new object without the property at path 
*/

var has = require('./helper').has;
var isNull = require('./helper').isNull;
var isArray = require('./helper').isArray;
var dissoc = require('./r_dissoc').dissoc;
var assoc = require('./r_assoc').assoc;
var update = require('./helper').update;

function dissocPath(path, obj){
    length = path.length
    if(length === 0){
        return obj
    }
    var idx = path[0]

    if(length > 1){
        if(!isNull(obj) && has(obj,idx)){
            var nextObj =   obj[idx]
            if(typeof idx === "number" && isArray(obj)){
                return update(idx,dissocPath(path.slice(1), nextObj), obj)
            }
            return assoc(idx, dissocPath(path.slice(1), nextObj), obj)
        }else{
            console.log('in else');
            return obj
        }
    }

    if(typeof idx == "number" && isArray(obj)){
        obj.splice(idx,1);
        return obj;
    }
    return dissoc(path[0], obj)


}

var oldObj = { c: { a: { ac: 50, c: [undefined, undefined,{s:42, a: 53}] } } };
var result = dissocPath(['c','a','c', 2, 'a'], oldObj);

console.log(result)
console.log(result.c.a.c)
console.log(oldObj)