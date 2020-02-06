// GLOBAL CONTEXT
module.exports.x = 1;
console.log(this); // window/global(module.exports) object

function variablesInThis(){
    this.person = "Bob"; // accessible in global scope
}

variablesInThis(); // Running the function in the global scope

console.log(person); // 'person' has been attatched to the global object

// IMPLICIT/OBJECT
// When the keyword 'this' is inside of a declared object.
// Use var in global context, let & const don't work
var person = {
    firstName: "Fred",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        name: "Bob the dog",
        sayHello: function(){
            // 'this' is referring to the 'dog' object, not the
            // 'person' object
            return this.name + " says hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
}
// 'person' is attatched to the global context because it was not
// defined inside a function
console.log(person.determineContext()); // window/global
console.log(person.dog.sayHello());

// EXPLICIT BINDING
// Choose the context of 'this' using 'call', 'apply', or 'bind'

// call() has set 'this' to be the 'person' object
console.log(person.dog.sayHello.call(person)); 
console.log(person.dog.determineContext.call(person)); //true

// call() helps reduce code duplication
let morgan = {
    firstName: "Morgan",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
}

let fred = {
    firstName: "Fred"
    // sayHi() does not need to be declared here
}

console.log(morgan.sayHi());
console.log(morgan.sayHi.call(fred));

// A function accessible from any object can be made
function sayHi(){
    return "Hi " + this.firstName;
}

console.log(sayHi.call(fred)); // calling 'fred' into sayHi()


// Apply is almost identical to call - except the params
// Apply uses one array of values instead of CSV
function addNums(a, b, c, d){
    return this.firstName + " just calculated " + (a + b + c + d)
}

console.log(addNums.call(fred, 1, 1, 1, 1)); // Fred just calculated 4
console.log(addNums.apply(fred, [1, 2, 3, 4])); // Fred just calculated 10

// Apply is best used when a function does not accept an array,
// apply spreads out values contained in an array
let nums = [1, 4, 23, 6, 4];
console.log(Math.max(nums)); // 'NaN' as Math.max() does not take an array
console.log(Math.max.apply(this, nums)); // 23


// Bind has parameters that work like call() - bind returns a function
// with the context of 'this' already bound.
let fredCalc = addNums.bind(fred, 1, 2, 3, 4);
let answer = fredCalc(); // fredCalc is a bound function with 'this' set to 'fred'
console.log(answer); // Fred just calculated 10

// All the args are not needed up front with bind! (partial application)
let fredSecondCalc = addNums.bind(fred, 1, 2);
let answerTwo = fredSecondCalc(3, 4); // The last two args
console.log(answerTwo); // Fred just calculated 10

// Bind in the wild
// Commonly, the context of 'this' is lost, in function that we don't
// want to execute straight away. (think async)
let bob = {
    firstName: "Bob",
    sayHi: function(){
        // setTimout is a method on the global/window object
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }, 2000);
    }
}

bob.sayHi(); // Hi undefined (2000ms later)

// Setting bind(this) as the first param to the setTimout function
// will set the object it is contained in as 'this'
let juba = {
    firstName: "Juba",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }.bind(this), 3000); // binding 'this' to 'juba' obj
    }
}

juba.sayHi(); // Hi Juba (3000ms later)

// The 'new' Keyword
// The context of 'this' can be set using the 'new' keyword
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let jerry = new Person("Jerry", "Blobkit");
console.log(jerry);


// UDEMY Exercise
/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject);
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments(){
    let args = [].slice.call(arguments); // grabs arguments & slices into a list
    return args.reduce((accumulator, nextValue) => {
        if(nextValue % 2 === 0){
            return accumulator + nextValue;
        }
        return accumulator;
    }, 0); // accumulator starts at 0
}

/* 
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num){
    let counter = 0;
    
    return function(){
        if(counter >= num){return "Maxed Out!"}
        counter++
        return fn.apply(this, arguments); // references args from the inner function
    }
}

/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
    

*/

function once(fn, thisArg){
    let ranOnce = false;
    return function(){
        if(!ranOnce){
        ranOnce = true;
        // What 'this' is set to is applied to the returned function, with arguments
        return fn.apply(thisArg, arguments); // fn is passed into the returned anonymous function
        }
    }
}