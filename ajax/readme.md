# AJAX
- Asynchronous Javascript & XML (Not the best name).
- XML is used less often, it is usually JSON that is used now.
- AJAX came on the scene around 2005, based on HTML, CSS, JS, DOM, XMLHTTP Requests.
- AJAX allows Web Applications that update without refreshing.
- Websites are able to send & request data from a server, in the background, without disturbing the current page.

## AJAX is not...
- A Library
- A Framework
- A Technology

## AJAX is...
- A approach to web development.

## Making Requests with JS
- XMLHTTP Request
A XHR Client exists in one of the following states:
<0, UNSENT, Client created open() not called yet>
<1, OPENED, open() has been called>
<2, HEADERS_RECEIVED, send() has been called & headers & status are available>
<3, LOADING, Downloading; responseText holds partial data>
<4, DONE, Operation complete>

- The Fetch API
- 3rd Party Libraries (jQuery, Axios, etc...)

## Data Formats
- An API does not respond with HTML.
- An API responds with pure data.
- Data Formats include XML & JSON

## XML
- Extended Markup Language is syntacticly similar to HTML. It does not describe layout like HTML.

### Example
<post>
    <title>Flying with Flyline</title>
    <author>Fred Fink</author>
</post>

## JSON
- JavaScript Object Notation looks almost the exact same as JavaScript Objects.
- JSON is used more often because it works very well with JavaScript.

### Example
'post': {
    'title': 'Flying with Flyline',
    'author': 'Fred Fink'
}

## Problems with XMLHttpRequest(XHR)
- Ugly, bulky syntax
- It's 16 years old
- No streaming capabilities

## Fetch API
- The 'Fetch' api is a modern replacement for 'XHR'.
- The syntax is clean!
- '.catch' runs when their is an error with the request, NOT the response.
- Browser support is not fully supported in most browsers, it does not work in IE at all

### Example 1 (Fetch basics)
fetch(url).then((response) => {
    // .then() runs when 'fetch()' is successful
    console.log(response);
}).catch((error) => {
    console.log(error);
});

### Example 2 (Parsing JSON with Fetch)
fetch(url).then((response) => {
    return response.json(); // returns a promise
}).then((data) => {
    // This .then() is called when the promise finishes
    console.log(data);
}).catch(() => {
    console.log("Problem encountered...");
});

### Example 3 (Fetch Options)
fetch(url, {
    // An 'options' object can be passed to 'fetch'
    method: 'POST',
    body: JSON.stringify({
        name: 'Red',
        login: 'Red'
    })
}).then((data) => {
    // do something
}).catch((error) => {
    // handle error
});

### Example 4 (Handling Fetch Errors)
fetch(url).then((response) => {
    if (!response.ok) {
        throw Error(request.status); 
        // Error thrown is up to the programmer
    }
    // If their is no error, the response is returned & passed to the    // next .then()
    return response;
}).then((response) => {
    console.log("ok");
}).catch((error) => {
    console.log(error);
});

## jQuery AJAX Methods
- 'get', 'post', and 'getJSON' are shorthand methods that call 'ajax'

.$.ajax // The other methods are built off of the 'ajax' jQuery method
.$.get
.$.post
.$.getJSON

### The jQuery 'ajax' method
- Creates an XMLHttpRequest 'under the hood'
- Parses data automatically, data type can be specified to be explicit

#### Example (GET Request)
$.ajax({
    // Creates the XHR & sends it
    method: "GET",
    url: "some.api.com",
    dataType: "json"
})
.done((response) => {
    // Runs if send is successful
    console.log(response);
})
.fail(() => {
    // Runs if send fails
    // do something
});

### jQuery Shorthand Methods
#### GET Method
- Takes one mandatory argument(URL) & three optional args (data, success, dataType)

##### Example
$.get("some.api.com")
.done((data) => {
    console.log(data);
})

#### POST Method
- Works the same as 'GET' but instead posts data

##### Example
let data = {name: "Bob", city: "Manchester"};

$.post("www.someurl.com", data)
.done((data) => {
    console.log("POST SUCCESS");
})

#### getJSON Method
- One mandatory arg(URL), two optional args(data, success)
- The dataType is automatically inferred as JSON

##### Example
$.getJSON("www.someapi.api.com)
.done((data) => {
    console.log(data);
})

## AXIOS
- This is a lightweight HTTP request library
- AXIOS is designed purely for HTTP requests
- HTTP requests can be made from node.js
- Automatic transforms for JSON
- Promise based
- Params can be passed as an object to avoid specifying params in the URL

### Example (GET Request)
- Creates an XMLHttpRequest 'under the hood'

axios.get(url)
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});

### Example (Handling Errors)
function sendRequest(){
    axios.get(url, {
        params: {
            postId: id;
        }
    })
    .then(addComments)
    .catch(handleErrors)
}

function handleErrors(error){
    if (error.response) {
        console.log("Response problem: ", error.response.status);
    } else if (error.request) {
        console.log("Request problem")
    } else {
        console.log("Error: ", error.message);
    }
}