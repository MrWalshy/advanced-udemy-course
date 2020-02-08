// name, completed, created_date
const mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be left blank!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now // Sets the default date to the current date
    }
});

let Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo; // todo schema is exported