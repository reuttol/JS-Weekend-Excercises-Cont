
function countDuplicates(str){

    let letterCount =  str.toLowerCase().split('').reduce((count, c) => {
        count[c] = count[c]+ 1 || 1;
        return count;
    }, {});

    let result = 0;
      
    for (const [key, value] of Object.entries(letterCount)){
        value > 1 ? result++ : 0;
    }

    return result;
}

console.log(countDuplicates('abcde111'));
console.log(countDuplicates('aabBcdcee'));
console.log(countDuplicates('Indivisibilities'))