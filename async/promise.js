// Promise Chaining
// Step 1, declare function
let counter = 0;
function incCounter() {
    counter++;
    console.log("Counter: ", counter);
}

// Step 2, create a runLater function
function runLater(callback, timeInMs) {
    // This returns a promise that can have .then & .catch attatched to
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let res = callback(); // The value in callback() is passed to res
            resolve(res); // res is passed to resolve
        }, timeInMs);
    });
    return promise;
}

// Step 3, chain the promises
// This invokes incCounter in 1 second. As runLater returns a promise,
// .then can be chained onto the promise
runLater(incCounter, 1000).then(() => {
    // This callback returns a new promise in 2 seconds
    return runLater(incCounter, 2000);
}).then(() => {
    return runLater(incCounter, 3000);
}).then(() => {
    // This .then is not required
});