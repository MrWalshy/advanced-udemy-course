let btn = document.querySelector("#btn");
let img = document.querySelector("#photo");

// Listen for click
btn.addEventListener("click", () => {
    // Make request
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
            // Convert JSON to a JS Object with JSON.parse()
            let data = JSON.parse(XHR.responseText);
            let url = data.message;
            console.log(url);
            img.src = url;
        } else {
            console.log("Problem encountered")
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});