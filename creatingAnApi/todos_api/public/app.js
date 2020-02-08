// Waits until the DOM has fully loaded before running nested JS
$(document).ready(() => {
    $.getJSON("/api/todos") // Relative url, grabs JSON
    .then(addTodos) // JSON is passed into addTodos as a param
    .catch(error => {
        console.log(error);
    });

    $("#todoInput").keypress(event => {
        if(event.which === 13){ // 'which' contains the keycode value
            createTodo();
        } 
    });

    $(".list").on("click", "li", event => {
        // console.log($(event.target))
        updateTodo($(event.target));
    });

    $(".list").on("click", "span", event => {
        // listening for a click on a 'span' inside '.list' (event delegation)
        event.stopPropagation(); // Stops the event bubbling up & activating on the li
        removeTodo($(event.target).parent()); // parent is the li
    });
});

let addTodos = todos => {
    // console.log(todos);
    // Add todos to page here
    todos.forEach(todo => {
        addTodo(todo);
    });
}

let addTodo = todo => {
    let newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    if(todo.completed){
        newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}

let createTodo = () => {
    // Send request to create new todo
    let userInput = $("#todoInput").val(); // Gets the value of #todoInput field
    // console.log(userInput);
    $.post("/api/todos", {name: userInput})
    .then((newTodo) => {
        $("#todoInput").val(""); // clear input field
        addTodo(newTodo); // changes live instead of on refresh (DRY code)
    })
    .catch((error) => {
        console.log(error);
    });
}

let removeTodo = todo => {
        // console.log($(event.target).parent().data("id"));
        let clickedId = todo.data("id");
        let deletedUrl = "/api/todos/" + clickedId;
        // event.target.parentElement.remove();

        // AJAX call
        $.ajax({
            method: "DELETE",
            url: deletedUrl
        })
        .then(data =>{
            console.log(data);
            todo.remove();
        })
        .catch(error => {
            console.log(error);
        });
}

let updateTodo = todo => {
    // console.log(todo.data("completed"));
    let updateUrl = "/api/todos/" + todo.data("id");
    let isDone = !todo.data("completed"); // get the opposite 'completed' of the current todo
    let updateData = {completed: isDone}; // pass string into object
    
    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: updateData
    })
    .then(updatedTodo => {
        todo.toggleClass("done");
        todo.data("completed", isDone); // sets whatever the value of 'isDone' is, opposite of old status(true or false)
        // console.log(isDone)
    })
    .catch(error => {
        console.log(error);
    });
}