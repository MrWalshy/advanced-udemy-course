# ES2015(ES6)
- First Version of JS released in 1995
- ECMAScript is a scripting-language spec
- ECMAScript was created to standardize how JS is wrote in 1996

## ES2015 Additions
- let, const
- template strings
- arrow functions
- default parameters
- rest and spread operators
- for...of loops
- object shorthand notation
- computed property names
- object destructuring
- array destructuring
- class keyword
- super and extends keywords
- maps/sets
- promises
- generators
- object, number, array methods

## const
- Declares a constant
- Can NEVER redeclare, unlike 'var' (results in a SyntaxError)
- A value of a object or array can be changed
- Objects can be mutated but not redeclared, these are 'mutable'
- Data that cannot be changed is called 'immutable'

## let
- Declares a variable
- Can reassign its value, CANNOT redeclare
- Creates a scope called 'block scope'
- Variables declared with 'let' CANNOT be accessed outside of its scope
- Referring before declaration results in a ReferenceError

### What accepts 'block scope'?
- if statements
- for & while loops
- do, try, catch statements

### Hoisting with 'let'
- 'let' is hoisted
- Cannot access its value(known as a TDZ, Temporal Dead Zone)
- Use 'let' when you don't want variables accessible outside of its block, otherwise use 'var'

## Template Strings
- Also known as 'String Interpolation'
- Conventionally concatenating strings requires the '+' operator, which is easy to mess up
- Template Strings are a sort of placeholder system, allowing you to insert variables in a easier format
- When using Template Strings, make sure to use backticks (``)
- Reference the variable with '$()'
- Backticks also allow 'Multiline Strings' unlike standard quotes/ticks

### Example
    var firstName = "Bob";
    var lastName = "Ed";
    console.log(`Hello $(firstName) $(lastName)`);

## Arrow Functions
- More concise then standard function expressions
- Replaces the keyword 'function' with '=>'
- Arrow functions can be 'one-liners', but the 'return' keyword & curly braces must be omitted
- If there is only one parameter, it does not require brackets
- Arrow functions do not get the keyword 'this'
- The keyword 'this', gets its context from the enclosing context (what is immediately outside of its scope
- Arrow functions don't have the keyword 'arguments' by default, although 'arguments' can be accessed if enclosed in a regular function. The 'arguments' are coming from the outer functions arguments.
- Arguments can be accessed in an arrow function, if really needed, by use of the 'rest' operator

### When NOT to use Arrow Functions
- NEVER use arrow functions as methods inside objects, because we get the incorrect value of 'this'

### Example (Multiline can use 'return')
    let add = (a, b) => {
        return a + b
    }   

### Example (One-liner)
let add = (a, b) => a + b;

### Example (One parameter)
let log = text => console.log(text);

## Default Parameters
- Ability to assign default values to parameters

### Example
    let add = (a = 10, b = 20) => {
        return a + b;
    }

    add(); // 30
    add(40) // 60

## For...Of Loop
- Built for iterating over values in an array
- New primitive data type called 'symbol'
- CANNOT iterate over an object
- Relies on the 'iterator' function being attatched in the __proto__
- Can ONLY be used with data structures implementing a 'Symbol.iterator' method

### Example
    let arr = [1, 2, 3, 4];

    for(let val of arr){
        // For each value in the array
        console.log(val);
    }

## Rest Operator
- Collects the remaining arguments to a function, and ALWAYS returns them in an array
- Denoted with '...'
- ONLY called the 'rest operator' when it is a parameter to a function
- Rest operator is a better alternative to the 'arguments' array-like object.

### Example
    function printRest(a, b, ...c){
        console.log(a);
        console.log(b);
        console.log(c); // No ... required
    }

    printRest(1, 2, 3, 4, 5);
    
    // CONSOLE OUTPUT
    // 1
    // 2
    // [3, 4, 5]

### Example (ES5 'arguments')
    function sumArgs(){
        var total = 0;

        for(var i = 0; i < arguments.length; i++){
            total += arguments[i];
        }
        return total;
    }

### Example (ES2015 'Rest Operator')
    // Remember, 'reduce()' reduces an array to a single value
    let sumArgs = (...args) => args.reduce((acc, next) => acc + next);

    sumArgs(1, 2, 3); // 6

## Spread Operator
- Used on arrays to spread each value out, as a comma separated value(csv)
- Useful when working with an array and needing CSV's
- ES5 used the 'apply' operator
- Spread is denoted with '...'

### Example (ES5, Joining Arrays)
    var arr1 = [1, 2, 3];
    var arr2 = [1, 2, 3];
    
    var combinedArr = arr1.concat(arr2);

### Example (ES2015, Joining Arrays)
    // Using arrays from above example
    var combinedArr = [...arr1, ...arr2];

### Example (ES5, Max value in an array)
    var arr = [1, 2, 3, 5, 3];
    
    Math.max(arr); // NaN
    Math.max.apply(this, arr); // 5

### Example (ES2015, Max value in an array)
    // Using 'arr' from above example
    Math.max(...arr); // 5

### Example (Using spread with a function)
    function sumVals(a, b, c){
        return a + b + c;
    }
    
    var nums = [12, 15, 20];

    // ES5
    sumVals.apply(this, nums); // 47

    // ES2015
    sumVals(...nums); // 47

## Object Shorthand Notation
- Reduces amount of code

### Example (Adding values to an object)
    var firstName = "Bob";
    var lastName = "Flod";
    
    // ES5
    var instructor = {
        firstName: firstName,
        lastName: lastName
    }

    // ES2015
    var instructor = {
        firstName,
        lastName
    }

### Example (Object Methods)
    // ES5
    var instructor = {
        sayHello: function(){
            return "Hello!";
        }
    }

    // ES2015
    var instructor = {
        // No need to specify ': function()' anymore
        sayHello(){
            return "Hello!";
        }
    }

### Example (Computed Property Names)
    // ES5
    var firstName = "Bob";
    var instructor = {};
    // Key Value Pair (firstName: value)
    instructor[firstName] = "I'm Bob!";

    instructor.Bob; // I'm Bob!

    // ES2015
    // Key value pairs can be directly placed inside on object creation
    var instructor = {
        // The brackets are added so it can compute the property name
        [firstName]: "I'm Bob!"
    }

    instructor.Bob // I'm Bob!

## Destructuring
- Extracting values from data stored in objects and arrays

### Example
    // ES5
    var instructor = {
        name: "Bob Shid",
        occupation: "Instructor"
    }

    var name = instructor.name;
    console.log(name); // Bob Shid

    // ES2015
    // All data specified is destructured into vars with the same name.
    var {name, occupation} = instructor;

    console.log(name); // Bob Shid
    console.log(occupation); // Instructor

    // Can also specify custom var names
    var {name: fullName, occupation: job} = instructor;

    console.log(fullName); // Bob Shid

### Example (Default Values with an Object)
    // ES5
    function createInstructor(options){
        var options = options || {};
        var name = options.name || {first: "Bob", last: "Shid"}
        var isWorking = options.isWorking || false;

        return [name.first, name.last, isWorking];
    }

    createInstructor(); // ["Bob", "Shid", false];
    createInstructor({isWorking: true}); // ["Bob", "Shid", true];
    createInstructor({name: {first: "Fred", last: "Red"}}); // Fred Red

    // ES2015
    function createInstructor({name = {first: "Red", last: "Fred"}, isWorking = false} = {}){
        return [name.first, name.last, isWorking];
    }

    createInstructor({name: {first: "Bob", last: "Shid"}}) // ["Bob", "Shid", false]

#### What is going on in the ES2015 example above?
- A destructured object is passed in as a default parameter
- A default value is assigned to an empty object, this lets the compiler know we are using 'ES2015 destructuring'
- Defaults to the destructured object parameter if nothing is passed in

### Example (Object fields as parameters)
    // ES5
    function displayInfo(obj){
        return [obj.name, obj.isWorking];
    }

    var instructor = {
        name: "Red",
        isWorking: false
    }

    displayInfo(instructor);

    // ES2015
    function displayInfo({name, isWorking}){
        return [name, isWorking];
    }

    var instructor = {
        name: "Fred",
        isWorking: false
    }
    // Passing in 'instructor' object to 'displayInfo' function
    displayInfo(instructor); // ["Fred", false]

## Array Destructuring
- Extract values from arrays into distinct variables

### Example (Destructuring an Array)
    // ES5
    var arr = [1, 2, 3];
    
    var a = arr[0];
    var b = arr[1];
    var c = arr[2];

    console.log(b) // 2

    // ES2015
    // Using array square brackets
    var [a, b, c] = arr;

    console.log(c) // 3

### Example (Destructuring arrays with a function)
    // ES5
    function returnNums(a, b){
        return [a, b];
    }

    var first = returnNums(3, 7)[0];
    var second = returnNums(3, 7)[1];

    console.log(first); // 3

    // ES2015
    var [first, second] = returnNums(3, 7);

    console.log(second); // 7

### Example (Swapping Values with Destructuring)
    // ES5
    function swap(a, b){
        var temp = a;
        a = b;
        b = temp;
        return [a, b];
    }

    swap(10, 5); // [5, 10]

    // ES2015
    function swap(a, b){
        return [a, b] = [b, a];
    }

    swap(10, 5); // [5, 10]

## RECAP
- Two new keywords for declaring variables, let and const. Const ensures a variable cannot be redeclared, let gives block scope.
- Evaluate variables in strings, and create multi-line strings with ES2015 template strings (Use backticks(``)).
- Arrow functions (=>), these do not get their own 'this' and 'arguments' keyword.
- Gather args to a function as an array with the rest operator. (...)
- Spread out values in an array to another value or function with the spread operator. (...)
- Write more concise methods and property names with shorthand notation and computer property names.
- Object destructuring is useful for reducing duplication, and passing in default params as a destructured object.
- Array destructuring can also be used for swapping variables in an array without a separate swap function