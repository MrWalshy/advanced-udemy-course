// function forEach(array, callback){
//     for(let i = 0; i < array.length; i++){
//         // value, index, array
//         callback(array[i], i, array);
//     }
// }

function halfValues(arr){
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element / 2);
    });
    return newArr;
}

console.log(halfValues([2, 4, 6]));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(element => {
        element[key] = value;
    });
    return arr;
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
    let splitArr = str.toLowerCase().split("");
    let obj = {};
    let vowels = "aeiou";
    
    splitArr.forEach(letter => {
        // Check to see if current letter is a value, -1 is returned if falsey
        if(vowels.indexOf(letter) !== -1){
            if (obj[letter]) {
                obj[letter]++;
            } else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}
