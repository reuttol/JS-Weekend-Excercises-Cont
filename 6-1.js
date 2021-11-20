
function accum(str){
    let result = '';
    for(let i=0; i< str.length; i++){
        result += (str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
        if(i < str.length-1)
            result += '-';
    }
    return result;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));