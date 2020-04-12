function assoc(ele, val, obj){
    var result = {}
    for(var attr in obj){
        result[attr] = obj[attr]
    }
    result[ele] = val;
    return result;
}

// obj = {a: 1, c: 2}
// var newObj = assoc('a',{'ac':50,'c':[[], {'s':42}]}, {'a': {'ad':50}})

// console.log(newObj);
// console.log(newObj.a.c)
// console.log(obj);

exports.assoc = assoc;