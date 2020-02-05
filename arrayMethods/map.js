// function map(arr, callback){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(callback(array[i], i, array));
//     }
//     return newArr;
// }

function doubleValues(arr){
    // Returns the resulting array
    return arr.map((value) => {
        // Makes sure the new array has the correct values
        return value * 2;
    });
}
console.log(doubleValues([1,2,3]));


function onlyFirstName(arr){
    return arr.map((val) => {
        // Returns only the value of key 'first' from each array object
        return val.first;
    });
}

console.log(onlyFirstName([{first: "bob", last: "bacon"}]));


/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(element => {
        // key is dynamic
        return element[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(element => {
        // Properties are static & known
        return element.first + " " + element.last;
    });
}