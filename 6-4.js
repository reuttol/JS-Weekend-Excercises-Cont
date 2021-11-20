
function isIsogram(str){
    let letterCount =  str.toLowerCase().split('').reduce((count, c) => {
        count[c] = count[c]+ 1 || 1;
        return count;
    }, {});

    let result = 0;
      
    for (const [key, value] of Object.entries(letterCount)){
        if(value > 1)
            return false;
    }
    return true;
}

console.log(isIsogram('moOse'));
console.log(isIsogram('aba'));
console.log(isIsogram('dermatoglyphics'));