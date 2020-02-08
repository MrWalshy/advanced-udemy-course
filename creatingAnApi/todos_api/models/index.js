const mongoose = require("mongoose");
mongoose.set("debug", true); // Allows debugging during development
mongoose.connect("mongodb://localhost/todo-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB Connected!");
}).catch(error => {
    console.log("ERROR with DB: " + error.message);
});

mongoose.Promise = Promise; // Allows the promise syntax

module.exports.Todo = require("./todo"); // This will auto connect todo.js