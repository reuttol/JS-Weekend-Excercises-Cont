function myFilter(func, arr){
    let returnArr = [];
    
    for (let i=0; i< arr.length; i++) {
        if(func(arr[i], i, arr))
            returnArr.push(arr[i]);
      }
    return returnArr;
}
const onlyEvenIndexes = (elem, i) => i%2 ? false : true;
console.log(myFilter(onlyEvenIndexes, ["hi", 5, 667, "groovy", {name: "reut"}]));


function myForEach(func, arr){
    for(let i=0; i<arr.length; i++){
        func(arr[i], i, arr);
    }
}
myForEach((elem, i) => console.log(elem**i), [8, 9, 10]);

function myMap(func, arr){
    let returnArr = [];
    
    for (let i=0; i< arr.length; i++)
        returnArr.push(func(arr[i], i, arr));
    
    return returnArr;
}

console.log(myMap( (elem) => elem * 2, [1, 2, 3, 4, 5]));
console.log(myMap( (elem, i) => elem * i, [1, 2, 3, 4, 5]));
console.log(myMap( (elem, i) => elem ** i, [1, 2, 3, 4, 5]));