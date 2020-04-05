function newRandom(){
    var date = new Date();
    var t = date.getTime();
    var rand = date.getSeconds() << date.getTime()
    rand = rand >= 0 ? rand : -rand;
    var sq =  t.toString();
    var length = sq.length;
    sq = sq.substring(length-3, length-1);

    rand = (rand * sq).toString();
    length = rand.length;
    if(length > 2){
        rand = parseInt(rand.substring(length-3, length-1))
    }else{
        rand = parseInt(rand)
    }

    rand = rand/ 100;

    return rand;
}


console.log(newRandom());
console.log(newRandom() * (100-10) + 10) ;