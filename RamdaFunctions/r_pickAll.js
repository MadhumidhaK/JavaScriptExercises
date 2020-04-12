function  pickAll(names, obj){
    var result = {};
    var length = names.length;
    var index = 0;
    while(index < length){
        var prop =  names[index]
        if(Object.prototype.hasOwnProperty.call(obj,prop)){
            result[prop] = obj[prop]
        }else{
            result[prop] = undefined;
        }
        if(index === length -1){
            return result;
        }
        
        index++;
    };
}

var arr1 = 'abcdefghijklmnopqrstuvwxyz'.split('');
var arr2 = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
arr1 = arr1.concat(arr2)
console.log(pickAll(arr1, {a: 2, b: 3}))