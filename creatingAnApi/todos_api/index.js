const express = require("express");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todos");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Extracts body of incoming request, exposes on 'request.body'
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views")); // Current dir + /views
app.use(express.static(__dirname + "/public")); // Current dir + /public

app.get("/", (request, response) => {
    // You can use response.send() to send JSON, response.json() is just more explicit
    // response.json({message: "Hi From JSON"});
    response.sendFile("index.html");
});

app.use("/api/todos", todoRoutes); // Auto appends to url '/api/todos/'

app.listen(port, () => {
    console.log("App is running on port " + port);
});