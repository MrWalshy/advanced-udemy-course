let numArray = [1, 2, 3, 2];

console.log("=== USING for loop ===")
function double(arr) {
    // This doubles each number in an array & logs the result to the console
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
}

double(numArray);

// Refactoring with forEach
console.log("=== USING forEach ===")
numArray.forEach((number) => {
    console.log(number * 2);
});

// The forEach functions callback has a signature on what it returns/uses
// These are 'currentElement, currentIndex, array'

console.log("=== findIndex ===");
// This returns the index of the first truthy element in an array.
// -1 is returned if the callback does not return a truthy value.
let foundValue = numArray.findIndex((number) => {
    // This will return a truthy value in the current usecase
    return number === 2;
});

console.log("The index of the first number 2 is " + foundValue);


// setTimout
console.log("=== setTimout ===");
// This function asynchronously invokes a callback after a delay in ms
function callback() {
    console.log("Callback function waited 1 second to log");
}

let delay = 1000; // 1second delay
setTimeout(callback, delay);

// Using setTimout with an anonymous function
setTimeout(() => {
    console.log("Anonymous function waited 2 seconds to run");
}, 2000);

// setTimout can also be cancelled
let timerId = setTimeout(() => {
    console.log("This function will run in 30 seconds")
}, 30000);

setTimeout(() => {
    console.log("Cancelling a setTimout: ", timerId);
    clearTimeout(timerId); // This line cancels the original setTimout
}, 3000);


// setInterval
// This function continously invokes a callback function after every
// x amount of seconds, where x is provided to the setInterval function.
// setInterval runs until program end or cancellation
setTimeout(() => {
    console.log("=== setInterval ===");
}, 3000);

function callbackNew() {
    console.log("This callback is continously called until the program exits");
}

let repeat = 3000; // 3 seconds
setInterval(callbackNew, repeat);

// setInterval can also be cancelled
let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log("setInterval on iteration: ", counter);
    if (counter === 3) {
        console.log("Cancelling iteration setInterval: ", intervalId);
        clearInterval(intervalId);
    }
}, 3000);
