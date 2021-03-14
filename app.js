const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();

    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create todo li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'heyy';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    //create check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('complete-button');
    todoDiv.appendChild(trashButton);


    //append to list
    todoList.appendChild(todoDiv);
}