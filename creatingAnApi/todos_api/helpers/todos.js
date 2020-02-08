let db = require("../models");

exports.getTodos = (request, response) => {
    db.Todo.find() // Connects to Todo db & finds all todos
    .then((todos) => {
        // If no errors, send the todos as json
        response.json(todos);
    })
    .catch((error) => {
        response.send(error);
    });
}

exports.createTodo = (request, response) => {
    db.Todo.create(request.body)
    .then((newTodo) => {
        // 201 signifies successful creation
        response.status(201).json(newTodo);
    })
    .catch((error) => {
        response.send(error);
    });
}

exports.getTodo = (request, response) => {
    // findOne() takes an object
    db.Todo.findOne({_id: request.params.todoId})
    .then((foundTodo) => {
        response.json(foundTodo);
    })
    .catch((error) => {
        response.send(error);
    });
}

exports.updateTodo = (request, response) => {
    // request.body contains the data that will be updated to the db
    db.Todo.findOneAndUpdate({_id: request.params.todoId}, request.body, {new: true})
    .then((todo) => {
        // The response will be the old data, but it does update. 
        // Add '{new: true}' as param to findOneAndUpdate to make the
        // response be the new data
        response.json(todo);
    })
    .catch((error) => {
        response.send(error);
    });
}

exports.deleteTodo = (request, response) => {
    db.Todo.deleteOne({_id: request.params.todoId})
    .then(() => {
        response.json({message: "Deleted!"});
    })
    .catch((error) => {
        response.send(error);
    });
}

module.exports = exports;