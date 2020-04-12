function converge(fun, ...funs){
    return function(input){
        var result = [];
        var length = funs.length;
        let index = 0;
        while(index < length){
            result.push(funs[index](input));

            if(index == length -1){
                return fun(result)
            }
            index++;
        }        
    }
}


function toUpper(s){
    return s.toUpperCase();
}

function toLower(s){
    return s.toLowerCase();
}

function concat([s1, s2]){
    return s1.concat(s2);
}


console.log(converge(concat,toUpper, toLower)('abcd'))

console.log(converge(([sum,n]) =>  sum/n, arr => {
   return arr.reduce(function(a,b){
        return a+b
    }, 0)
}, arr => arr.length)([2,4,6,8,10]))