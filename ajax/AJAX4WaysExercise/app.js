let xhrBtn = document.querySelector("#xhr");
let fetchBtn = document.querySelector("#fetch");
let axiosBtn = document.querySelector("#axios");
let quoteDisplay = document.querySelector("#quote");

let url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"

// XHR
xhrBtn.addEventListener("click", () => {
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
            let data = JSON.parse(XHR.responseText);
            quoteDisplay.innerText = data[0];
        }
    }

    XHR.open("GET", url);
    XHR.send();
});

// FETCH
fetchBtn.addEventListener("click", () => {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        quoteDisplay.innerText = data[0];
    })
    .catch((error) => {
        console.log(error);
    })
});

// jQuery
$("#jquery").click(() => {
    $.getJSON(url)
    .done((data) => {
        quoteDisplay.innerText = data[0];
    })
    .fail((error) => {
        console.log(error);
    })
});

// AXIOS
axiosBtn.addEventListener("click", () => {
    axios.get(url)
    .then((response) => {
        quoteDisplay.innerText = response.data[0];
    })
    .catch((error) => {
        console.log(error);
    })
});