const express = require("express");
const router = express.Router();
const db = require("../models/"); // Automatically runs 'index.js' model
const helpers = require("../helpers/todos");

// CHAINED SHOW AND CREATE ROUTES
router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

// RETRIEVE A TODO, UPDATE A TODO, DELETE A TODO
// The colon before 'todoId' defines it as a path variable
router.route("/:todoId", )
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;