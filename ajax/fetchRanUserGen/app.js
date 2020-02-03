let avatar = document.querySelector("#avatar");
let fullname = document.querySelector("#fullname");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let nextUserBtn = document.querySelector("#btn");

// api
let url = "https://randomuser.me/api/"

// fetch the url on button click
nextUserBtn.addEventListener("click", () => {
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors)
});

function handleErrors(response){
    if (!response.ok) {
        throw Error(response.status);
    }

    return response; // Response has to be returned to be passed into parseJSON()
}

function parseJSON(response){
    return response.json().then((parsedData) => {
        return parsedData; // Passed into updateProfile()
    })
}

function updateProfile(data){
    let results = data.results["0"];
    // Update user profile
    avatar.src = results.picture.medium;
    fullname.innerText = results.name.first + " " + results.name.last;
    username.innerText = results.login.username;
    email.innerText = results.email;
    city.innerText = results.location.city;
}

function displayErrors(error){
    console.log("Display Errors");
    console.log(error);
}