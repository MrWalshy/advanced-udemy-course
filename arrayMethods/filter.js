// function filter(array, callback){
//     let newArr = [];

//     for(let i = 0; i < array.length; i++){
//         // callback runs on each array value(array[i])
//         if(callback(array[i], i, array)){
//             // if true, value is pushed into the new array
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

let names = [
    {name: "bob"},
    {name: "Ike"},
    {name: "Kenny"}
];

names.filter((value, index, array) => {
    return console.log(value.name.length < 4);
});


/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(element => {
        // Returns the element if it has the key specified
        return element[key] !== undefined;
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
    return arr.filter(element => {
        return element === searchValue;
    })[0]; // [0] specifies only returning the first value in the array
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(element => {
        return element[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    str = str.toLowerCase().split("");
    let vowels = "aeiou";
    
    return str.filter(element => {
        // If the current value is not in vowels, return the value
        return vowels.indexOf(element) === -1; 
    }).join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    return arr.filter(element => {
        // Filters out all even numbers returning only odd
        return element % 2 !== 0;
    }).map(element => {
        // Maps the doubled odd elements into an array
        return element * 2;
    });
}