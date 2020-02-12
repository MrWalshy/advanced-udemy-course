# Object Oriented Programming with ES2015
- Refactor Object-Oriented Code to use the 'class', 'extends', and 'super' keywords
- Understand how to use new data structures in ES2015
- Refactor async code using the 'native Promise constructor' and create functions that can pause and resume execution with 'generators'
- Utilise helpful methods for copying objects, converting array-like-objects into arrays, and handling issues with 'NaN'
- Examine two new features to ES2016
- Use new string methods and refactor code using ES2017 async functions
- Introduce the spread and rest operator for objects

## The 'class' keyword
- In JS, their is not built in support for OOP
- Improves Code Readability & Reusability
- Reserved keyword provided by ES2015
- Creates a 'constant' - CANNOT be redeclared
- 'class' is an abstraction of constructor functions and prototypes
- 'class' does not hoist
- Still uses the 'new' keyword to create objects

### Example (Creating a class)
    // ES5
    function Student(firstName, last){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    var bob = new Student("Bob", "Fink");

    // ES2015
    class Student {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName
        }
    }

    var bob = new Student("Bob", "Fink");

### Example (Instance Methods)
    // ES5
    function Student(firstName, last){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Student.prototype.sayHello = function(){
        return "Hello " + this.firstName + " " + this.lastName;
    }

    // ES2015
    class Student {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName
        }
        // Method is placed inside of the 'class' keyword
        // No 'function' keyword
        // Places methods on the 'prototype object'
        sayHello(){
            return `Hello ${this.firstName} ${this.lastName}`;
        }
    }

### Example (Class Methods)
    // ES5
    // Class Methods are placed directly on the constructor function
    Student.isStudent = function(obj){
        return obj.constructor === Student;
    }

    // ES2015
    // Class methods are created using the 'static' keyword
    class Student {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName
        }
        sayHello(){
            return `Hello ${this.firstName} ${this.lastName}`;
        }
        static isStudent(obj){
        return obj.constructor === Student;
        }
    }
    
## Inheritance
- Passing along methods and properties from one class to another
- ES2015 uses the 'extends' keyword

### Example
    // ES5
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.sayHello(){
        return "Hello " + this.firstName + " " + this.lastName;
    }

    function Student(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Set prototype property of a constructor to be an object created from another prototype property
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    // ES2015
    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
        sayHello(){
            return `Hello $(this.firstName) $(this.lastName)`;
        }
    }

    class Student extends Person {
        // Student.prototype.constructor === Student // true
        // Student is an extension of the Person class
    }

## Super
- Finds a method by the same name in the parent class or the class which has passed down methods or properties to a child class

### Example
    // ES5
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.sayHello(){
        return "Hello " + this.firstName + " " + this.lastName;
    }

    function Student(){
        Person.apply(this, arguments);
    }

    // ES2015
    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
        sayHello(){
            return `Hello $(this.firstName) $(this.lastName)`;
        }
    }

    class Student extends Person{
        constructor(firstName, lastName){
            // MUST use 'super' here
            super(firstName, lastName);
        }
    }

### Class recap
- Able to quickly create constructor functions and prototype methods using the class keyword
- Add class methods using the static keyword
- Implement inheritance by using the 'extends' and 'super' keywords
- ES2015 'class' syntax is just an abstraction that uses functions and objects

## Maps
- Also called 'hash maps' in other languages
- Until ES2015, objects were replacements for maps
- Similar to objects, except the keys can be ANY data type
- Created with the 'new' keyword
- Maps implement a 'Symbol.iterator', this means we can use a for...of loop

### Why Use Maps?
- Finding the size is easy with '.size()' - No more loops or 'Object.keys()'
- Keys can be any data type
- Maps cannot have their keys accidently overwritten - Unlike keys on the 'Object.prototype'
- Iterating over keys and values in a map is quite easy

### When to use a Map?
- If you need to look up keys dynamically (they are not hard coded strings)
- If you need keys that are not strings
- If you are frequently adding and removing key/value pairs
- Are key-value pairs frequently added or removed?
- If operating on multiple keys at a time

### WeakMap
- Similar to a 'Map', except all keys MUST be objects
- Values in a WeakMap can be cleared from memory if there is no reference to them
- More performant than maps, CANNOT be iterated over
- Not seen very often

### Example (Creating Maps)
    var firstMap = new Map;

    firstMap.set(1, "Bob");
    firstMap.set(false, "A boolean");
    firstMap.set("nice", "A string");
    firstMap.delete("nice"); // true
    firstMap.size; // 2

    var arrayKey = [];
    firstMap.set(arrayKey, [1, 2, 3, 4]);

    var objectKey = {};
    firstMap.set(objectKey, {a: 1});

### Example (Extracting Values)
    firstMap.get(1); // "Bob"
    firstMap.get(false); // "A boolean"
    firstMap.get(objectKey); // {a: 1}

### Example (Iterating over a map with 'forEach')
    firstMap.forEach(value => console.log(value));

    // Bob
    // A boolean
    // [1, 2, 3, 4]
    // {a: 1}

### Example (Iterating using built in 'Symbol.iterator' methods)
    firstMap.values(); // MapIterator of values
    firstMap.keys(); // MapIterator of keys

## Sets
- All values in a set are unique
- Any type of value can exist in a set
- Created using the 'new' keyword
- Already existed in a few other languages, ES2015 brought them to JS

### WeakSet
- Similar to a set, all values MUST be objects
- Values in a WeakSet can be cleared from memory if there is no reference to them
- More performant than sets, CANNOT be iterated over

### Example
    var A = new Set;

    // CAN also be created from an array
    var A2 = new Set([3, 1, 4, 1, 2, 1, 5]) // {3, 1, 4, 2, 5}

    // Add to a set with 'add()'
    A.add(10); // {10}
    A.add(20); // {20, 10}

    // Check the size(amount of elements) in a Set with 'size'
    A.size; // 2

    // Check if a Set has a specified value with 'has()'
    A.has(10); // true

    // Delete a value from a Set with 'delete()'
    A.delete(20); // true

    // Sets implement a 'Symbol.iterator', so a for...of loop can be used
    A2[Symbol.iterator]; // function(){}

## Promises
- ES2015 introduced the 'promise constructor'
- A one time guaranteed return of some future value
- When the value is figured out - the promise is either 'resolved/fulfilled' or 'rejected'
- Friendlier way to refactor callback code
- Created using the 'new' keyword
- Every promise constructor accepts a callback function containing two parameters, 'resolve' and 'reject'
- These parameters can be renamed to anything
- These parameters are functions that run if the promise is 'resolved' or 'rejected'
- The value returned from a promise WILL ALWAYS contain a '.then()' and a '.catch()' method. These are functions to be executed when the promise is resolved or rejected
- Promises always return something has a '.then' (thenable) - promises can be chained together and return values from one promise to another

### What is Promise.all?
- Accepts an array of promises, and resolves all of them or rejects once a single one of the promises has been first rejected(fail fast)
- If all passed-in promises fulfill, Promise.all is fulfilled with an array of the values from the passed-in promises, in the same order as the promises passed in
- Promises don't resolve sequentially, but Promise.all waits for them

### Example (Promise constructor)
    function displayAtRandom(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if(Math.random() > .5){
                    resolve("Yes!");
                } else {
                    reject("No!");
                }
            }, 1000);
        });
    }

    displayAtRandom().then(function(value){
        console.log(value);
    }).catch(function(error){
        console.log(error);
    });

### Example (Promise.all)
    function getMovie(title){
        // jQuery request
        return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
    }

    var shrekPromise = getMovie("shrek");
    var titanicPromise = getMovie("titanic");

    Promise.all([shrekPromise, titanicPromise]).then(function(movies){
        return movies.forEach(function(value){
            console.log(value.Year);
        });
    });

## Generators
- A special kind of function which can pause execution and resume at any time
- Created using a '*' asterisk
- When invoked, a generator object is returned to us with the keys of value and done
- Value is what is returned from the paused function using the 'yield' keyword
- Done is a boolean which returns true when the function has completed
- You can use multiple 'yield' keywords inside of a generator function

### Example
    function* pauseAndReturnValues(num){
        for(let i = 0; i < num; i++){
            yield i;
        }
    }

    var gen = pauseAndReturnValues(5);

    gen.next(); // {value: 0, done: false}
    gen.next(); // {value: 1, done: false}
    ...
    gen.next(); // {value: undefined, done: true}

## Object.assign & Array.from
- Object.assign takes objects as parameters and passes the keys & values from the passed-in objects to the new object created that does not have the same reference
- Object.assign - If their are objects inside of the object being copied, those still have a reference
- Array.from converts other data types into arrays

### Example (Object.assign)
    // ES5
    var o = {name: "Bob"};
    var o2 = 0;

    o2.name = "Fred";
    o.name; // "Fred"

    // ES2015
    var o = {name: "Bob"};
    var o2 = Object.assign({}, o); // First param indicates making a new // object without a reference to the old object

    o2.name = "Fred";
    o.name; // "Bob"

### Example (Array.from)
    // ES5
    var divs = document.getElementsByTagName("div"); // array like obj
    divs.reduce; // undefined, since it not an actual array

    var converted = [].slice.call(divs); // convert the array-like-obj 
    // into an array

    converted.reduce; // function reduce(){...}

    // ES2015
    var divs = document.getElementsByTagName("div");
    var converted = Array.from(divs);

    var firstSet = new Set([1, 2, 3, 4, 3, 2, 1]); // {1, 2, 3, 4}
    var arrayFromSet = Array.from(firstSet); // [1, 2, 3, 4]

## find
- Invoked on arrays
- Accepts a callback with value, index and array (just like forEach, map, filter, etc...)
- Returns the value found or undefined if not found

### Example
    var instructors = [{name: "Fred"}, {name: "Bob"}];

    instructors.find(function(value){
        return value.name === "Bob";
    }); // {name: "Bob"}

## findIndex
- Similar to 'find', except it returns an index or -1 if the value is not found

### Example
    var instructors = [{name: "Fred"}, {name: "Bob"}];

    instructors.findIndex(function(value){
        return value.name === "Bob";
    }); // 1

## includes
- Returns a boolean if a value is in a string - easier than using indexOf

### Example
    // ES5
    "awesome".indexOf("some") > -1 // true

    // ES2015
    "awesome".includes("some"); // true

## Number.isFinite
- A method on the Number constructor
- A handy way for handling NaN being a typeof number
- Also a 'Number.isInteger' method

### Example
    // ES5
    function seeIfNumber(value){
        if(typeof value === "number" && !isNaN(value){
            return "It is a number!";
        });
    }

    // ES2015
    function seeIfNumber(value){
        if(Number.isFinite(value)){
            return "It is a number!";
        }
    }

# ES2016
## Exponentiation Operator (**)
- To get the exponent(power) of a number
- Can be used with the equals sign (**=)

### Example
    // ES2015
    var calculatedNum = Math.pow(2, 4);
    calculatedNum; // 16

    // ES2016
    var calculatedNum = 2**4;
    calculatedNum; //16

    var nums = [1, 2, 3, 4];
    var total = 2;

    for(let i = 0; i < nums.length' i++){
        total **= num[i];
    }

## Arrays ([].includes)
- ES2015 brought "".includes() for strings
- ES2016 brought the same capability, but for arrays

### Example
    // ES2015
    var nums = [1, 2, 3, 4, 5];
    nums.indexOf(3) > -1; // true
    nums.indexOf(44) > -1; // false

    // ES2016
    var nums = [1, 2, 3, 4, 5];
    nums.includes(3); // true
    nums.includes(44); // false

# ES2017
## padStart
- The first parameter is the total length of the new string
- The second parameter is what to pad with from the start. Default is an empty space.

### Example
    "awesome".padStart(10); // "   awesome"
    "awesome".padStart(10, "!"); // "!!!awesome"

## padEnd
- The first parameter is the total length of the new string
- The second parameter is what to pad with from the end. Default is an empty space.

### Example
    "awesome".padEnd(10, "!"); // "awesome!!!"

## Async Functions
- A special kind of function that is created using the word 'async'
- The purpose of async functions is to simplify writing asynchronous code, specifically Promises
- What makes them special is the 'await' keyword
- Async functions can be placed as methods inside objects
- Async functions can be placed as instance methods with ES2015 class syntax

### What is 'await'?
- A reserved keyword that can only be used inside async functions
- 'await' pauses execution of the async function, and is followed by a Promise. 'await' waits for the promise to resolve, then resuming the async functions execution and returns the resolved value
- Think of the await keyword like a pause button
- No '.then', 'callback', or 'yield' necessary
- If a promise rejected using await, an error will be thrown. Can use try/catch statement to handle errors

### Example (async function)
    async function first(){
        return "We did it!";
    }

    first(); // returns a promise
    first().then(value => console.log(value)); // "We did it!"

### Example (Using await)
    async function getMovieData(){
        console.log("Starting");
        var movieData = await $.getJSON("somelink.api.com");
        // Lines below do NOT run until the promise is resolved
        console.log("All done");
        console.log(movieData);
    }

    getMovieData() // logs an object with data about the movie

### Example (Object async)
    var movieCollector = {
        data: "titanic",
        async getMovie(){
            var response = await $.getJSON("somelink.api.com");
            console.log(response);
        }
    }

    movieCollector.getMovie();

### Example (Class async)
    class MovieData {
        constructor(name){
            this.name = name;
        }
        async getMovie(){
            var response = await $.getJSON("somelink.api.com");
            console.log(response);
        }
    }

    var m = new MovieData("shrek");
    m.getMovie();

### Example (Handling Errors)
    async function getUser(user){
        try {
            var response = await $.getJSON(`https://api.github.com/users/${user}`);
            console.log(response.name);
        } catch(e){
            console.log("User does not exist");
        }
    }

### Example (Parallel HTTP requests)
    async function getMovieData(){
        var titanicPromise = await $.getJSON("somelink.api.com");
        var shrekPromise = await $.getJSON("somelink.api.com");

        var titanicData = await titanicPromise;
        var shrekData = await shrekPromise;

        console.log(titanicData);
        console.log(shrekData);
    }

    getMovieData();

### Example (await with Promise.all)
    async function getMovieData(first, second){
        // Promise.all awaits multiple resolved promises here
        var moviesList = await Promise.all([
            $.getJSON(`somelink.api.com`),
            $.getJSON(`somelink.api.com`);
        ]);
        console.log(moviesList[0].Year);
        console.log(moviesList[1].Year);
    }

    getMovieData('shrek', 'titanic');