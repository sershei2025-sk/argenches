// Todo application script

const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-button');

// Function to add a new todo item
function addTodo() {
    const todoText = todoInput.value;
    if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

// Event listener for the add button
addButton.addEventListener('click', addTodo);

// Event listener for pressing Enter key
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});