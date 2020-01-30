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