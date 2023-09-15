const input = document.getElementById('input');
const btn = document.getElementById('btn');
const todoList = document.getElementById('todo_list');

function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement("li");
        li.innerHTML = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.style = `
        background-color: #ff6347;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 3px 6px;
        cursor: pointer;
        font-size: 15px;
        `
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);

        todoList.appendChild(li);
    
    input.value = "";
    }
}

btn.addEventListener('click', addTask);

