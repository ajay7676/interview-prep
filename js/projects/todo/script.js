const text = document.getElementById('view-task-text');
 console.log("fff" , text)

const loadTodos = () =>{

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
     console.log(todos);
    //  todos.array.forEach(element => console.log(element.inputValue) );
    todos.forEach(todo =>  addTodoDom(todo))

 } 
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const addTodo = () =>{
     const inputValue = todoInput.value.trim();
     if (inputValue === "") {
          inputValue.focus();
     }
     const todo = {id: Date.now() , inputValue}
    addTodoDom(todo);
    saveTodo(todo)
}

const addTodoDom = (todo) =>{
    const listItem = document.createElement("li");
    listItem.classList.add('item');
    listItem.setAttribute('data-id', todo.id);
    listItem.innerHTML=`
      <span class="task-text">${todo.inputValue}</span>
       <input class="edit-input" type="text" value="${todo.inputValue}" style="display:none;" />
      <div class="btnCon">
        <button  class="view" onclick="viewTask(${todo.id})">View</button>
        <button  class="edit" onclick="enableEdit(${todo.id})">Edit</button>
        <button class="save" onclick="saveEdit(${todo.id})" style="display:none;">Save</button>
        <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>

      </div>
    `;
    todoList.appendChild(listItem);
    
}
const saveTodo = (todo) =>{
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

     
}
const deleteTodo = (id) =>{
   const todos = JSON.parse(localStorage.getItem('todos')) || [];
   const updateTodos= todos.filter(todo => todo.id !== id);
   localStorage.setItem('todos', JSON.stringify(updateTodos));
   document.querySelector(`li[data-id="${id}"]`).remove();

}

const enableEdit = (id) =>{
    const li = document.querySelector(`li[data-id="${id}"]`);
    li.querySelector('.task-text').style.display = 'none';
    li.querySelector('.edit').style.display = 'none';
    li.querySelector('.edit-input').style.display = 'inline';
    li.querySelector('.save').style.display = 'inline';
}
const saveEdit = (id) =>{
    const li = document.querySelector(`li[data-id="${id}"]`);
    const input = li.querySelector('.edit-input');
    const newText = input.value.trim();
    if (newText === '') return;
    // Update DOM
    li.querySelector('.task-text').textContent = newText;
    li.querySelector('.task-text').style.display = 'inline';
    input.style.display = 'none';
    li.querySelector('.save').style.display = 'none';
    li.querySelector('.edit').style.display = 'inline';

  // Update localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, inputValue: newText } : todo
    );
    localStorage.setItem('todos', JSON.stringify(todos));

}
const viewTask = (id) =>{
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    const li = document.querySelector(`li[data-id="${id}"]`);
    const taskTextSpan = li.querySelector('.task-text');
    if (!taskTextSpan) {
        console.error(".task-text span not found inside the task item!");
        return;
    }
    const taskText = taskTextSpan.textContent; 

    console.log(taskText)

    
}

const closePopup = () =>{
    const modal = document.getElementById("modal");
    modal.classList.add("hidden")
}


document.addEventListener('DOMContentLoaded', loadTodos);

