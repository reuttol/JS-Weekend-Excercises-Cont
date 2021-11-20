
function longest(str1, str2){
    mySet = new Set();
    
    str1.concat(str2).split('').forEach(c => mySet.add(c));
    
    return [...mySet].sort().join('');
}

console.log(longest("ghfh", "abc"));
console.log(longest(`xyaabbbccccdefww`, `xxxxyyyyabklmopq`));
console.log(longest(`abcdefghijklmnopqrstuvxyz`, `abcdefghijklmnopqrstuvxyz`));
