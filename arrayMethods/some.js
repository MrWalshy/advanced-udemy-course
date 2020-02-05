// function some(array, callback){
//     for(let i = 0; i < array.length; i++){
//         if(callback(array[i], i, array)){
//             return true;
//         }
//     }
//     return false;
// }

function hasEvenNumber(arr){
    return arr.some((value) => {
        return value % 2 === 0;
    });
}

console.log(hasEvenNumber([1,3,5,6]));

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    return arr.some(element => {
        return element % 2 !== 0;
    });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    num = num.toString().split("");
    
    return num.some(element => {
        return element === "0";
    });
}