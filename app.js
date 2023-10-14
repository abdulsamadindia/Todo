let btn = document.querySelector("button");
let inp = document.querySelector("input");
let alert = document.querySelector("p");
let ul = document.querySelector("ul");
let dltBtn = document.getElementsByClassName("delete");



btn.addEventListener("click", function () {
    if (inp.value.trim() === "") {
        alert.innerText = "Please enter todo";
    } else {
       
        let userInputTodoItem = document.createElement("li");
        userInputTodoItem.innerText =inp.value;

        ul.append(userInputTodoItem);

        let editBtn = document.createElement("button");
       editBtn.innerText = "Edit";
       editBtn.classList.add("edit");
       userInputTodoItem.append(editBtn);

       let delBtn = document.createElement("button");
       delBtn.innerText = "Delete";
       delBtn.classList.add("delete");
       userInputTodoItem.append(delBtn);
       
       
        console.log("Todo created");
        inp.value = "";
        alert.innerText = "";
    }
})


ul.addEventListener("click", function(event){
    let todoItem = event.target.parentElement;
    if (event.target.classList.contains("delete")) {
        todoItem.remove();
    } else if (event.target.classList.contains("edit")){
        let newTodo = prompt("Edit Todo", todoItem.firstChild.textContent);
        if (newTodo !== null && newTodo.trim() !== "") {
            todoItem.firstChild.textContent = newTodo;
        }
        
    }
})


