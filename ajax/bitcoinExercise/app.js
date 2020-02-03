let btn = document.querySelector("#refresh");
let priceDisplay = document.querySelector("#price");

btn.addEventListener("click", () => {
    // Gets current currency selection from form
    let currency = document.querySelector('input[name="currency"]:checked');
    let selectedCurrency = currency.value;

    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
            // Parse JSON response data
            let data = JSON.parse(XHR.responseText);
            let price = "";

            // Print price in selected currency
            switch (selectedCurrency) {
                case "gbp":
                    price = data.bpi.GBP.rate;
                    priceDisplay.textContent = "£" + price;
                    break;
                case "usd":
                    price = data.bpi.USD.rate;
                    priceDisplay.textContent = "$" + price;
                    break;
                case "euro":
                    price = data.bpi.EUR.rate;
                    priceDisplay.textContent = "€" + price;
                    break;
            }
        } else {
            console.log("Encountered a problem...") // This runs on every button click three times???
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});