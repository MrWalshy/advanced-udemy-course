let arr = [1,2,3,4];

let value = arr.reduce((accumulator, nextValue) => {
    // accu = 1, nextVal = 2, returned val = 3 on first iteration
    console.log("Accumulator:", accumulator + ",", "Next Value:", nextValue);
    return accumulator + nextValue;
});
console.log(value);

// STRINGS
let names = ["Bob", "Fred"];

let sentence = names.reduce((accumulator, nextValue) => {
    return accumulator += " " + nextValue;
}, "The names are:");
console.log(sentence);

// OBJECTS
let arr2 = [5,4,1,4,5,4,6,4]

let finishedReduction = arr2.reduce((accumulator, nextValue) => {
    if(nextValue in accumulator){
        // If the next value is in the accumulator, add 1 to the keys value
        accumulator[nextValue]++;
    } else {
        // Else if the next value is not in the accumulator,
        // create & set the new keys value to 1
        accumulator[nextValue] = 1;
    }
    return accumulator;
}, {}); // OBJECT being passed into accumulator

console.log(finishedReduction);

// Exercise
function sumOddNumbers(arr){
    return arr.reduce((accumulator, nextValue) => {
        if(nextValue % 2 !== 0){
            accumulator += nextValue;
        }
        return accumulator;
    }, 0);
}
console.log(sumOddNumbers([3, 2, 3, 4])); // '6' expected

function createFullName(arr){
    return arr.reduce((accumulator, nextValue) => {
        // Push the nextValue objects 'first' & 'last' key values into the accumulator
        accumulator.push(nextValue.first + " " + nextValue.last);
        return accumulator;
    }, []);
}

console.log(createFullName([
    {first: "Morgan", last: "Walsh"},
    {first: "Bob", last: "Bacon"}
    // [ 'Morgan Walsh', 'Bob Bacon' ]
]));

// UDEMY
/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
    return arr.reduce((accumulator, nextValue) => {
        accumulator.push(nextValue[key]);
        return accumulator;
    }, []);
}


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
   str = str.toLowerCase().split("");
   let vowels = "aeiou";
   
   return str.reduce((accumulator, nextValue) => {
       if(vowels.indexOf(nextValue) !== -1){
           if(nextValue in accumulator){
               accumulator[nextValue]++;
           } else {
               accumulator[nextValue] = 1;
           }
       }
       return accumulator;
   }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value){
    return arr.reduce((accumulator, nextValue, index) => {
        // At the current index in the accumulator, set the key with its value
        accumulator[index][key] = value;
        return accumulator;
    }, arr);
}


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
    return arr.reduce((accumulator, nextValue) => {
        if(callback(nextValue)){
            // If the callback returns true, push into list 0
            accumulator[0].push(nextValue);
        } else {
            // If the callback returns false, push into list 1
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [[], []]); // Two lists, one for true and for false values
}