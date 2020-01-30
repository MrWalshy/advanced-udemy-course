// RUN THIS CODE IN A BROWSER OR IT WILL NOT WORK

let XHR = new XMLHttpRequest();

XHR.onreadystatechange = () => {
    // Event listener that fires every time the 'state' changes
    console.log("READY STATE IS: ", XHR.readyState);

    // Grab the response data from state 4
    if (XHR.readyState === 4) {
        // Check if response worked by using HTTP status codes, 200 is OK
        if (XHR.status === 200) {
            console.log(XHR.responseText);
        } else {
            console.log("Problem encountered...")
        }
    }
}

XHR.open("GET", "https://api.github.com/zen"); // HTTP Request & URL
XHR.send();