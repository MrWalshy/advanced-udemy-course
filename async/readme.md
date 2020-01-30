# Asynchronous Javascript
- Javascript is a 'single threaded' language, known as 'synchronous'. One call stack & one memory heap is available.
- The problem with synchronous code comes from only allowing one operation at a time in the available thread, this can freeze up the program if more than one operation tries to run. Also known as 'blocking the main thread'.
- In comes Asynchronous JS, the JS Engine allows this. This allows long network requests that DO NOT block the main thread.

## The Stack & The Heap

### The Stack
- An ordered data structure
- Keeps track of function invocations
- Part of the JS runtime(not accessed directly)

#### What is a 'call-stack'?
- The call stack stores execution context created during code execution.
- JS has a single stack. The call stack operates on a 'LIFO' (Last in, First out) structure. This means you can only interact(add or remove) from the top of the stack.
- In a single threaded application, calls are made in the order specified in the code (each operation has to wait for the prior to finish before running).

#### How does code change the stack?
- When a function is invoked, the details(line number & function) of the invocation save to the top of the stack. (Pushing)
- When a function returns, the details of the invocation are removed from the top of the stack. (Popping)

#### What is the 'Stack Frame'?
- The Stack Frame contains the stack. It holds memory of the function invoked, the parameters passed to the function, & the current line number

#### Stack Definition
- A set of ordered stack frames
- The most recently invoked function sits on top of the stack
- The first function invoked sits at the bottom of the stack
- The stack is processed from top to bottom

### The Heap
- The heap is a memory area where data is stored

#### Example
// The object is created in the 'heap'
// 'obj' is the reference to the object stored in the 'heap'
let obj = {
    firstName: "Morgan",
    age: 21
};

// This does not create & store new data in the 'heap', it instead is
// a copy of the object referenced. Modifications to 'referenceObject'
// will affect the original 'obj'.
let referenceCopy = obj;

## What is a 'callback function'?
- A function that has been passed into another function. The function is passed into the other function as a parameter & then invoked.

### Example 1
function callbackFunction() {
    console.log("Sent from callback);
}

function higherOrderFunction(fn) {
    console.log("About to call 'callbackFunction'");
    fn(); // Invokes function 'callbackFunction'
    console.log("Callback has been invoked");
}
// The callbackFunction is passed in as an argument
higherOrderFunction(callbackFunction);

### Example 2
function sendMessage(message, callback) {
    return callback(message);
}
// The return is 'console.log("Hi there console!")'
sendMessage("Hi there console!", console.log);
// The return is 'alert("Hi there alert!")'
sendMessage("Hi there alert!", alert);

// Here, the return value of the function is passed into a variable to be used later
let answer = sendMessage("Please confirm your action!", confirm);

### Example 3
function greet(name, formatter){
    return "Hello, " + formatter(name);
}

greet("Morgan", function(name) {
    // Here, I have passed in an anonymous function
    return name.toUpperCase();
});

### findIndex Example
function findIndex(arr, callback) {
    // iterates through the array
    for(let i = 0; i < arr.length; i++) {
        // if the callback value returns truthy
        if(callback(arr[i], i, arr) === true){
            // return i
            return i;
        }
    }
    // else return -1
    return -1;
}

### What are 'callbacks' commonly used for?
- Advanced Array Methods
- Browser Events
- AJAX Requests
- React Development

## What is a 'higher-order function'?
- A higher-order function takes either one or more functions as arguments(Procedural Parameter) or returns a function as the result.
- In JS language, it is simply a function accepting a callback as a parameter or returns a function as a result.

## Event Loops & the Queue
### The Queue
- This is a ordered list of functions that are waiting to be placed on the 'Stack'.
- The Queue processes functions on a First In, First Out(FIFO) basis.
- Callbacks are not passed from the queue to the stack until the stack is empty

### The Event Loop
- JS Runtime functionality checks the queue whenever the stack is empty.
- If the Runtime see's the stack is empty, the front of the queue is placed on the stack

## Promises
### What is a 'promise'?
- An object representing a task to be completed in the future.
- Often, a promise is used that has been returned instead of creating one

### How do you create a 'promise'?
- With the promise constructor:

#### Example 1 (Creating a promise)
let p1 = new Promise((resolve, reject) => {
    // 'resolve' function runs if the async task is successful, else 
    // 'reject' function runs
    resolve([1, 2, 3, 4]);
});

p1.then((arr) => {
    // This callback function is invoked if resolve is invoked inside of 
    // of the promise
    console.log("Promise p1 resolved with data: ", arr);
});

#### Example 2 (Handling Errors)
let p2 = new Promise((resolve, reject) => {
    reject("ERROR"); // This is passed to .catch
});

p2.then((data) => {
    console.log("Promise p2 resolved with data: ", data);
}).catch((data) => {
    console.log("Promise p2 rejected with data: ", data);
});

#### Example 3 (Wrapping setTimout with Promise)
// The promise is created before setTimout() resolves
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise.then((data) => {
    // The data is passed here when the timer is done
    console.log("Random int passed to resolve: ", data);
});

### Promise Chaining
- Nested Callbacks are messy, not logical, hard to read, the code also in not modular.
- Asynchronous tasks can be turned into a chain of promises

#### Example 1 (Promise Chaining)
let promise = new Promise((resolve, reject) => {
    setTimout(() => {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 3000);
});

promise.then((data) => {
    // Once 3 seconds have passed, the first promise callback runs
    console.log("Random int passed to resolve: ", data);
    // chained promise below
    return new Promise((resolve, reject) => {
        setTimout(() => {
            resolve(Math.floor(Math.random() * 10));
        }, 1000);
    });
}).then((data) => {
    // The chained anonymous promises callback runs 1 second after the 
    // first promises callback has resolved.
    console.log("Second random integer passed to resolve: ", data);
});

#### Example 2 (Returning Data in Chained Promises)
let promise = new Promise((resolve, reject) => {
    resolve(5);
});

promise.then((data) => {
    return data * 2; // 10
}).then((data) => {
    return data + 20; // 30
}).then((data) => {
    console.log(data); // Logs 30 to the console
});