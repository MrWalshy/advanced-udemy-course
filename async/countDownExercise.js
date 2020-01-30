// Create a function called countDown
// countDown accepts 1 parameter, time in seconds
// Log to the console the remaining time every second
// When the timer hits 0, stop the timer and log "Ring Ring Ring!!!"
function countDown(time) {
    let intervalId = setInterval(() => {
        if (time === 0) {
            console.log("Ring Ring Ring!!!");
            clearInterval(intervalId);
        } else {
            console.log("Timer: ", time);
            time--;
        }        
    }, 1000);
}

countDown(5);