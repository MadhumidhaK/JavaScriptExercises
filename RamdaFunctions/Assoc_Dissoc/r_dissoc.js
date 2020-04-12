function dissoc(ele, obj){
    var result = {...obj}
    console.log('....')
    console.log('ELE:')
    console.log(ele)
    console.log('obj')
    console.log(obj)
    if(Object.prototype.hasOwnProperty.call(result,ele)){
       
        delete result[ele]
    }
    return result;
}

// var obj = {a: {b: 5}, b: 2, c: 3};
// result = dissoc('b', obj)

// console.log('obj');
// console.log(obj);
// console.log('result');
// console.log(result);

// var arr = [{a: 1}, {b:2}, {c: 3}];
// var result_2 = dissoc(2, arr);

// console.log('arr');
// console.log(arr);
// console.log('result_2');
// console.log(result_2);


exports.dissoc = dissoc;