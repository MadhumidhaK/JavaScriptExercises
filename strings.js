var input = "#one || $two && #someone || $something";

var output = input.split(" ").map((word, index) => {
    var type;
    var value;
    if(index%2 == 0){
        if(word.charAt(0) === "#"){
            type = "intent";
        }else if(word.charAt(0) == "$"){
            type = "entity";
        }
        value = word.substring(1);
    }else{
        type = "op";
        if(word == "||"){
            value = "or"
        }
        else{
            value = "and"
        }
    }

    return {
        type: type,
        value: value
    }
});

console.log(output)